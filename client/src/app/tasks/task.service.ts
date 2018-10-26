import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService{

    constructor(private http:Http) { }

    getTasks(){
        return this.http.get(`/api/tasks`)
        .map(response=>response.json())
        .catch(error=> error );
    }

    addTask(newTask){
        return this.http.post(`/api/task`,newTask)
        .map(response=>response.json())
        .catch(error=>error);
    }

    deleteTask(id){
        return this.http.delete(`/api/tasks/${id}`)
        .map(response=>response.json())
        .catch(error=>error);
    }

    updateTask(task){
        return this.http.put(`/api/tasks/${task._id}`,task)
        .map(response=>response.json())
        .catch(error=>error);
    }
    
}