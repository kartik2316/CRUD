import { Component, OnInit,EventEmitter, Output ,Input} from '@angular/core';
import { SharingService } from '../sharing.service';
import { user } from '../user';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.scss']
})
export class UpdateempComponent implements OnInit {
  @Input() emitter = new EventEmitter<object>();

  constructor(private eeservice:SharingService) { }
newid:number;
newname:string;
newemail:string;
newgender:string;
usermodel:any;

  ngOnInit(): void {


    this.newid = this.eeservice.getdata()['id'];
    this.newname = this.eeservice.getdata()['name'];
    this.newemail = this.eeservice.getdata()['email'];
    this.newgender = this.eeservice.getdata()['gender'];
    this.usermodel=new user(this.newid,this.newname,this.newemail,this.newgender);



  }

  updateRecord() {
    console.log(this.usermodel);
    this.emitter.emit(this.usermodel);


  }
}


