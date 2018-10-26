import { Component, OnInit } from '@angular/core';
import { TaskService } from "./task.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-tasks',
    templateUrl: 'tasks.component.html',
    styleUrls:['tasks.component.css']
})

export class TaskComponent implements OnInit {

    isLoaded:boolean=false;
    viewMode:boolean=true;
    updatedTitle='';
    tasks:any;
    TaskIndex=0;
    searchFilter:any={title:''};

    constructor(private taskService:TaskService
    ,private _flashMessagesService: FlashMessagesService) { }

    loadTasks(){
        this.isLoaded=false;

        this.taskService.getTasks()
        .subscribe(tasks=>{
            this.isLoaded=true;
            this.tasks=tasks;
        },(error)=>{
            console.log(error);
        });
    }

    addTask(form:any){
        
        let newTask={
            title:form.controls['title'].value,
            isDone:false
        };
            
        if(!newTask.title){
            this._flashMessagesService.show('Please fill in title',
                { cssClass: 'alert-danger', timeout: 2000 }
            );
            return false;
        }
        
        this.isLoaded=false;

        this.taskService.addTask(newTask)
        .subscribe(response=>{
            this._flashMessagesService.show(
                response.message + ' done!',
                { cssClass: 'alert-success', timeout: 2000 }
            );
            this.loadTasks();
            this.isLoaded=true;
        },(error)=>{
            console.log(error);
        });
        
        form.reset();
    }

    deleteTask(id){
        this.isLoaded=false;

        this.taskService.deleteTask(id)
        .subscribe(response=>{
            this.isLoaded=true;
            this._flashMessagesService.show(
                response.message + ' done!',
                { cssClass: 'alert-success', timeout: 2000 }
            );
            if (response.message.toLowerCase()=='ok'){
                for (var i=0;i<this.tasks.length;i++){
                    if (this.tasks[i]._id==id){
                        this.tasks.splice(i,1);
                    }
                }
            }
        },(error)=>{
            console.log(error);
        });
    }

    updateStatus(task){
        var _task={
            _id:task._id,
            title:task.title,
            isDone:!task.isDone
        }

        this.taskService.updateTask(_task)
        .subscribe(response=>{
            task.isDone=!task.isDone;
        },(error)=>{
            console.log(error);
        });
    }


    editTitle(e,task,index){
        this.viewMode=false;
        this.updatedTitle=task.title;
        this.TaskIndex=index;
    }

    cancelEdit(){
        this.viewMode=true;
    }

    saveTitle(task,newTitle){
        this.viewMode=true;
        task.title=newTitle;
       
        this.taskService.updateTask(task)
        .subscribe(response=>{
            this._flashMessagesService.show(
                response.message + ' done!',
                { cssClass: 'alert-success', timeout: 2000 }
            );
        },(error)=>{
            console.log(error);
        });

    }

    ngOnInit() {
        this.loadTasks();
        this._flashMessagesService.grayOut(true);
     }
}