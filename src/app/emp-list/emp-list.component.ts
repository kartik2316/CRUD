import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
  
})
export class EmpListComponent implements OnInit {
  public employees=[ ]  
  constructor(private _es:EmpserviceService) { }

  ngOnInit(): void {
  this._es.getemp()
  .subscribe(data => this.employees = data);
  }


}
