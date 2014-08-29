var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	text: String
});

var TodoModel = mongoose.model('TodoModel',todoSchema);
module.exports = TodoModel;