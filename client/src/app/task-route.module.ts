import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from "./tasks/task.component";
import { PageNotFoundComponent } from "./NotFound/page-not-found.component";
import { AddTODOComponent } from "./AddTask/add-task.component";


const taskRoutes:Routes=[
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks',children:[
    { path:'add',component:AddTODOComponent},
    { path:'',component:TaskComponent}
  ]},
  { path:'pagenotfound',component:PageNotFoundComponent},
  { path: '**',  component: PageNotFoundComponent }   
];


@NgModule({
  imports: [RouterModule.forRoot(taskRoutes) ],
  exports: [ RouterModule ]
})
export class TaskRoutingModule {}