var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var tasks=require('./TaskSchema');

var url='mongodb://ds153785.mlab.com:53785/mytasklist';
mongoose.connect(url,{user:'ahmed',pass:'pclock',useMongoClient:true});

  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=> {
    console.log('DB connected');
  });


//Get All Tasks
router.get('/tasks', (request, response) => {
    tasks.find( (error,todos)=>{
        if (error) throw error;

        response.json(todos);
    } );
});

//Get one task
router.get('/tasks/:id', (request, response) => {
    tasks.find({ _id: request.params.id }, (error, task) => {
        if (error) {
            response.send(error);            
        } else
            response.json(task);
    });
});


//Save a task
router.post('/task', (request, response) => {
    var task = request.body;

    if (!task.title && !task.isDone) {
        response.status(400);
        response.send({ "error": "Bad Data" });
    } else {
        tasks.create(task,(err,result)=>{
            if (err){
                console.log(err);
                response.send({ "message": "Error" });
            } else
                response.send({ "message": "OK" });
        });    
}

});

//Delete a task
router.delete('/tasks/:id', (request, response) => {

    tasks.remove(
        { _id: request.params.id },
        (err)=>{
            if (err){
                console.log(err);
                response.send({"message":"Error"});
            } else
                response.send({ "message": "OK" });
        }
    );
    
});

//Update a  task
router.put('/tasks/:id', (request, response) => {
    var task = request.body;
    
    if (!task.title) {
        response.status(400);
        response.json({ "error": "Error updating the task" });
    } else {        
        tasks.findOneAndUpdate(
            { _id: request.params.id },
        task,(err,result)=>{
            if (err){
                console.log(err);
            } else {
                response.send({ "message": "OK" }); 
            }
        });
       
    }


});

module.exports = router;