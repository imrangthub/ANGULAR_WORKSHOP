import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrPayrollRoutingModule } from './hr-payroll-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';

@NgModule({
  declarations: [DashboardComponent, LeaveApplicationComponent],
  imports: [
    CommonModule,
    HrPayrollRoutingModule
  ]
})
export class HrPayrollModule { }
