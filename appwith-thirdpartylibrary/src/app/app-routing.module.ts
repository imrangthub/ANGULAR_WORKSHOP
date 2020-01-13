import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './hr-payroll/dashboard/dashboard.component';
import { LeaveApplicationComponent } from './hr-payroll/leave-application/leave-application.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hr-payroll',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'hr-payroll',
        pathMatch: 'full'
      },
      {
        path: 'leave-application',
        component: LeaveApplicationComponent
      },
    ]
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]

})
export class AppRoutingModule { }
