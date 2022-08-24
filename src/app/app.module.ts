
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import{TemperatureComponent} from './temperature/temperature.component';
import { TablePracticeComponent } from './table-practice/table-practice.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpserviceService } from './empservice.service';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    TablePracticeComponent,
    EmpListComponent,
    EmpDetailComponent,
    UpdateempComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule


   ],
  exports: [
    RouterModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
