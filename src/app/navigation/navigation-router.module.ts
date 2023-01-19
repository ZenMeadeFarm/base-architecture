import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components inside this module
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {FooterComponent} from "./footer/footer.component";



const routes: Routes = [
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
