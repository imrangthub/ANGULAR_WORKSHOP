import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HrPayrollModule } from './hr-payroll/hr-payroll.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // custome app module 
    HrPayrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
