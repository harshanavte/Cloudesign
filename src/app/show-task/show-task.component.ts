import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  public result :any ;
  
  constructor(private crud:ApiCallService,private http:HttpClient) { }
  fetchTask(extra:any){
    this.crud.fetchData('task'+extra).subscribe((res)=>{
      
      this.result = res;
    },
    (err)=>{
      console.log(err);
        })
    }
    fetchTask1(extra:any){
  
      this.crud.fetchData('task'+extra).subscribe((res:any)=>{
        this.progress=res;
       
      
      },
      (err)=>{
    console.log(err);
      })
    }
    fetchTask2(extra:any){
      
      this.crud.fetchData('task'+extra).subscribe((res:any)=>{
        this.complete=res;
       
      
      },
      (err)=>{
    console.log(err);
      })
    }

  ngOnInit(): void {
    this.fetchTask("?status=1");
    this.fetchTask1("?status=2");
    this.fetchTask2("?status=3");
  }
  onItemDrag(e: any) {
   
    var ob=e.target.attributes.for.value.split('#'); 
    console.log("fromdrag")
    console.log(ob); 
    localStorage.setItem("title",ob[0]);
    localStorage.setItem("description",ob[1]);
    localStorage.setItem("status",ob[2]);
    localStorage.setItem("datetime",ob[3]);
    localStorage.setItem("id",ob[4]);
   
  console.log(e.target);
  
  
    }
    
    public progress:any=[];
    
    onItemDrop(e: any) { 
     
      var t=this.progress.push(e.dragData);
     
       
      console.log("drg data "+e.dragData);
      console.log(this.progress)
     
      console.log(this.result);
     
   var position=this.result.indexOf(e.dragData);
   this.result.splice(position,1);
        console.log(this.result);
      
    //console.log(e);
    //console.log(e.nativeEvent);
    
     
      
     
  
      localStorage.setItem("status","2");
      var obj={
        title:localStorage.getItem("title"),
      description:localStorage.getItem("description"),
      status:localStorage.getItem("status"),
  datetime:localStorage.getItem("datetime"),
  id:localStorage.getItem("id")
      }
      console.log(obj)
      console.log("collection name");
      console.log(`task?id=${obj.id}`,obj);
      
      this.crud.putData(`task/${obj.id}`,obj).subscribe(
        (response:any)=>{
      console.log(response);
     
      
    
      },(error:any)=>{
  
      }
      )
      
    }
    public complete:any=[];
    onItemDropComplete(e:any) {
      this.complete.push(e.dragData);
      var position=this.result.indexOf(e.dragData);
       this.result.splice(position,1);
        console.log(this.result);
      console.log(e.dragData);
      console.log(this.complete);
      localStorage.setItem("status","3");
      var obj={
        title:localStorage.getItem("title"),
      
      description:localStorage.getItem("description"),
      status:localStorage.getItem("status"),
  
  datetime:localStorage.getItem("datetime"),
  id:localStorage.getItem("id")
      }
      console.log(obj)
      //console.log("collection name");
      //console.log(`task?id=${obj.id}`,obj);
      
      this.crud.putData("task/"+obj.id,obj).subscribe(
        (response:any)=>{
      console.log(response);
      
      },(error:any)=>{
  
      }
      )
    } 
   

}
