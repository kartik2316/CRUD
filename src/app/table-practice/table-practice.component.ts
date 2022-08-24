import { Component, OnInit } from '@angular/core';
import { UpdateempComponent } from '../updateemp/updateemp.component';
import data from './data.json';
import {MatDialog} from '@angular/material/dialog';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-table-practice',
  templateUrl: './table-practice.component.html',
  styleUrls: ['./table-practice.component.scss']
})
export class TablePracticeComponent implements OnInit {
color="red";

col=["red","black"];
 constructor(public dialog:MatDialog,private eservice:SharingService) {}


clikedid:number;
clikname:string;
clikemail:string;
clikgender:string;


afterclikedid:number;
afterclikname:string;
afterclikemail:string;
afterclikgender:string;
k:any;
updateid(g:any) {
  this.clikedid=g.id;
  this.clikname=g.name;
  this.clikemail=g.email;
  this.clikgender=g.gender;

 this.eservice.setdata(g);


  this.dialog.open(UpdateempComponent, {
    width:'40%',
    height:'70%',

  });



}


ngOnInit(): void {
  // console.log("no"+this.eservice.getupdateddata());


 }
 getnewdata(k:object){
  console.log(k);

 }
  deleteid (index:number) {
    if (index != -1) {
        this.arrayObj.splice(index, 1);
    }

};
  arrayObj:students[]=data;
sid:number;
sname:string;
semail:string;
sgender:string;

getid(val:number|null,type:"sid") {
  this.sid=val;
}
getname(val:string) {
this.sname=val;
}
getemail(val:string) {
this.semail=val;
}
getgender(val:string) {
  this.sgender=val;
}


addstudent() {
  const newdata={
    "id": this.sid,
    "name": this.sname,
    "email": this.semail,
    "gender": this.sgender
  }


this.arrayObj.push(newdata);
this.sid=+"";
this.semail="";
this.sgender="";
this.sname="";


}

}

class students{
  id:number;
  name:string;
  email:string;
  gender:string;
}

function deleteid(kid: any, any: any) {
  throw new Error('Function not implemented.');
}
