import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public msg:String="";
  
  constructor(private crud:ApiCallService,private http:HttpClient) { }
 

  ngOnInit(): void {
  }

  add_task(x1:any,x2:any,x3:any){
    var obj={
      title:x1.value,desc:x2.value,status:x3.value,datetime:Date.now()
    }
    console.log(obj);
    this.crud.postData("task",obj).subscribe(
      (res)=>{
        this.msg="Task Added";
       },
       (err)=>{
      
       })
  }
}
