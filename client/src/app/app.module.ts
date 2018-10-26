import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskModule } from "./tasks/task.module";
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { PageNotFoundComponent } from "./NotFound/page-not-found.component";
import { TaskRoutingModule } from "./task-route.module";

@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
  ],
  imports: [  
    BrowserModule,FlashMessagesModule,TaskRoutingModule
    ,TaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
