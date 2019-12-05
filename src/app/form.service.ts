import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private addPersonUrl:string="http://localhost:1234/angularProjectFrontend/person";
  
  constructor(private http:HttpClient) { }
 

addPersons(personObj:any):Observable<boolean>{
    return this.http.post<boolean>(this.addPersonUrl,personObj,{responseType: 'text' as 'json'});
  }
 
  

}
