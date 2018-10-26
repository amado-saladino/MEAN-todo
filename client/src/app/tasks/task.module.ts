import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "./task.component";
import { TaskService } from "./task.service";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AddTODOComponent } from "../AddTask/add-task.component";


@NgModule({
    declarations: [
      TaskComponent,AddTODOComponent
    ],
    imports: [ HttpModule,  
      CommonModule,FormsModule,FilterPipeModule      
    ],
    providers: [],
    exports:[TaskComponent]
  })
  export class TaskModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: TaskModule,
          providers: [TaskService]
        }
      }
   }