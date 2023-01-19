import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components added to this routes are below
import {FormComponent} from "./form/form.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
