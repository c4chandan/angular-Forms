import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { FormService } from 'src/app/form.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  model(model: any) {
    throw new Error("Method not implemented.");
  }

  constructor( private p:FormService) { }
public pesonObj:Person[];

onLoad(){
  console.log(this.personObj);
}
  ngOnInit() {
    this.onLoad();
  }

   personObj=new Person();

   onSubmit(){
     alert("are sure you want to submit");
     console.log(this.personObj);
this.p.addPersons(this.personObj).subscribe(data=>{console.log(data);this.onLoad();
   },(err:HttpErrorResponse)=>{
     console.log(err);
   });

}
}
