import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
c="";f="";
changes(val:string|null,type:"c"|"f") {
if(val===null){
  this.c="";
  this.f="";
  return;
}
const t=Number(val);
if(type==='c'){
  this.f=((t*9)/5+32).toFixed(3);

}
else{
  this.c=(((t-32)*5)/9).toFixed(3);
}
}
}
