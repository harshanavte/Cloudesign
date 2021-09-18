import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './components/home/home.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

const routes: Routes = [
  {path:'',redirectTo:'/add-task',pathMatch:'full'},
  // {path:'homePage',component:HomeComponent},
  {path:'add-task',component:AddTaskComponent},
  {path:'show-task',component:ShowTaskComponent},
  {path:'edit-task',component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
