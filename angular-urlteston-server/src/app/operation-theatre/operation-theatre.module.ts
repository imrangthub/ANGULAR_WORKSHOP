import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationTheatreRoutingModule } from './operation-theatre-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OperationTheatreRoutingModule
  ]
})
export class OperationTheatreModule { }
