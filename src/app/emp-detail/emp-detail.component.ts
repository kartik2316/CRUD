import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnInit {
  employees=[  
   
  ]  
  constructor(private _es:EmpserviceService) { }

  ngOnInit(): void {
    this._es.getemp()
    .subscribe(data => this.employees = data);
    }
  
}
