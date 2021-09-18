import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { EheComponent } from './components/ehe/ehe.component';
import { HomeComponent } from './components/home/home.component';
import { EfooterComponent } from './components/efooter/efooter.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    EheComponent,
    HomeComponent,
    EfooterComponent,
    AddTaskComponent,
    ShowTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
