import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {


data:object;

  constructor() { }

  setdata(data:any){
    this.data=data;
  }
  getdata(){
    return this.data;
  }

}
