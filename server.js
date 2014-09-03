var express = require('express');
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/todolist';
var TodoModel = require('./model/model');

mongoose.connection.on("connected",function(){
	console.log('mongoose connects to ' + dbURI + ' successfully!');
});
mongoose.connect(dbURI);

var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
// app.use(app.router); 

app.get('/todolist',function(req,res){
	TodoModel.find(function(err,data){
		if(err){
			return res.send(err);
		}
		res.json(data);
	});
});

app.post('/todolist',function(req,res){
	var newItem =new TodoModel({text: req.body.text});
	newItem.save(function(err,newItem){
		if(err) console.error(err);
		TodoModel.find(function(err,data){
			if(err) return console.error(err);
			res.json(data);
		})
	})
});

app.delete('/todolist/:id',function(req,res){
	TodoModel.remove({_id:req.params.id},function(err,data){
		if(err){
			return console.error(err);
		}
		TodoModel.find(function(err,data){
			if(err){
				return console.error(err);
			}
			res.json(data);
		})
	})
})

app.listen(3000,function(){
	console.log('App is listening on port 3000');
}) ; 