import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DashboardComponent } from './pathology/dashboard/dashboard.component';
import { SampleCollectionComponent } from './pathology/sample-collection/sample-collection.component';

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
    path: 'pathology',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'pathology',
        pathMatch: 'full'
      },
      {
        path: 'sample-collection',
        component: SampleCollectionComponent
      },
    ]
  },
  {
    path: 'ot',
    component: HomeComponent,
    loadChildren: './operation-theatre/operation-theatre.module#OperationTheatreModule'
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
