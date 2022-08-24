import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemp } from './empinterface';
@Injectable({
  providedIn: 'root'
})

export class EmpserviceService {
url:string="/assets/data/empdata.json";

  constructor(private http:HttpClient) { }

  getemp() :Observable<Iemp[]>{
    
return this.http.get<Iemp[]>(this.url); 
  
  }
}
