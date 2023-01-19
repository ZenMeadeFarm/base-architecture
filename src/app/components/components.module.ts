// these modules gets imported into the main module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app components
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
