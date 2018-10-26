var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');

var url='mongodb://ahmed:pclock@ds153785.mlab.com:53785/mytasklist';
var MongoClient=mongodb.MongoClient;
var collection=null;
var connection=null;

//Get All Tasks
router.get('/tasks', (request, response) => {        

    MongoClient.connect(url,(error,db)=>{
        connection=db;

        connection.on('error', ()=>{
            console.log('Error occured');
        } );

        if (error){
            console.log('Error connecting to database server',error);
        }
        else {
            console.log('Connection established');
            collection=db.collection('tasks');     
            
            collection.find({}).toArray( (err,tasks)=>{
                if (err){
                    console.log(err);
                } else {
                    response.json(tasks);
                }

            } );
            
        }

        
    } );
});

//Get one task
router.get('/tasks/:id', (request, response) => {
    collection.findOne({ "_id" : mongodb.ObjectId(request.params.id) }
    ,(error, task) => {
        if (error) {
            response.send(error);
        }
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
    collection.insert(task,(err,result)=>{
        if (err){
            console.log(err);
        }
        response.send({ "message": "OK" });
    });
}

});

//Delete a task
router.delete('/tasks/:id', (request, response) => {

    collection.deleteOne(
        { "_id" : mongodb.ObjectId(request.params.id) },
        (err,result)=>{
            if (err){
                console.log(err);
            }
            response.send({ "message": "OK" });
        }
     );
    
});

//Update a  task
router.put('/tasks/:id', (request, response, next) => {
    var task = request.body;
    var updateTask = {};

    if (task.isDone)
        updateTask.isDone = task.isDone;

    if (task.title)
        updateTask.title = task.title;


    if (!updateTask) {
        response.status(400);
        response.json({ "error": "Error updating the task" });
    } else {
        collection.updateOne(
            { "_id" : mongodb.ObjectId(request.params.id) },
            updateTask,
            (err,result)=>{
                if (err){
                    console.log(err);
                }
                response.send({ "message": "OK" });
            }
        );
    }


});

module.exports = router;