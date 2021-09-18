import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  public title:any;
  public desc:any;
  public status:any;
  public msg:string="";


  constructor(private route:ActivatedRoute, private crud:ApiCallService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.route)
    var titleId = this.route.snapshot.params['EditId']
    console.log(titleId)
    this.crud.fetchData('task/'+titleId).subscribe((res:any)=>{
      console.log(res);
      this.title = res['title']
      this.desc = res['description']
      this.status=res['status']
    }),
    (error:any)=>{
      console.log(error)
    }
  }

  update(a1:any,a2:any,a3:any){
    console.log(a1)
    var obje = {title:a1,description:a2,status:a3,datetime:Date.now()}
    console.log(obje)
    var titleId = this.route.snapshot.params['titleId'] 
  
    this.crud.putData('task/'+titleId,obje).subscribe((res:any)=>{
      console.log(res)
      this.msg="Task Edit";
      this.router.navigate(['/show-task'])
    }
    ,(err:any)=>{
      console.log(err)
    })

  }
  }


