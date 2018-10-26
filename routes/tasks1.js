var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ahmed:pclock@ds153785.mlab.com:53785/mytasklist', ['tasks']);

db.on('error', function (err) {
    console.log('database error', err);
});

//Get All Tasks
router.get('/tasks', (request, response, next) => {
    db.tasks.find((error, tasks) => {
        if (error) {
            response.send(error);
        }
        response.json(tasks);
    });
});

//Get one task
router.get('/tasks/:id', (request, response, next) => {
    db.tasks.findOne({ _id: mongojs.ObjectId(request.params.id) }, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
});


//Save a task
router.post('/task', (request, response, next) => {
    var task = request.body;

    if (!task.title && !task.isDone) {
        response.status(400);
        response.send({ "error": "Bad Data" });
    } else {
        db.tasks.save(task, (error, task) => {
            if (error) {
                response.send(error);
            }
            response.send({ "message": "OK" });
        });
    }
});

//Delete a task
router.delete('/tasks/:id', (request, response, next) => {
    db.tasks.remove({ _id: mongojs.ObjectId(request.params.id) }, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json({ "message": "OK" });
    });
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
        db.tasks.update({ _id: mongojs.ObjectId(request.params.id) }, updateTask, {}, (error, task) => {
            if (error) {
                response.send(error);
            }
            response.json({ "message": "OK" });
        });
    }


});

module.exports = router;