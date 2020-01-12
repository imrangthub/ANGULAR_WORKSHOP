import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologyRoutingModule } from './pathology-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SampleCollectionComponent
  ],
  imports: [
    CommonModule,
    PathologyRoutingModule
  ]
})
export class PathologyModule { }
