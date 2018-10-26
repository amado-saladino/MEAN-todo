//This file is used by mongoose
var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var todoSchema = new Schema({
    title:{type:String,required:true},
    isDone:Boolean
});

//tasks is our table or document
var todo = mongoose.model('tasks',todoSchema);
module.exports=todo;