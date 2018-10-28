/*
This script uses the localhost address instead of relative path to api tasks
*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService{

    constructor(private http:Http) { }

    getTasks(){
        return this.http.get(`http://localhost:3000/api/tasks`)
        .map(response=>response.json())
        .catch(error=> error );
    }

    addTask(newTask){
        return this.http.post(`http://localhost:3000/api/task`,newTask)
        .map(response=>response.json())
        .catch(error=>error);
    }

    deleteTask(id){
        return this.http.delete(`http://localhost:3000/api/tasks/${id}`)
        .map(response=>response.json())
        .catch(error=>error);
    }

    updateTask(task){
        return this.http.put(`http://localhost:3000/api/tasks/${task._id}`,task)
        .map(response=>response.json())
        .catch(error=>error);
    }
    
}