import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentsRoutingModule} from "./components/components-routing.module";  // we import our child router into the major router

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule)
  },

  // 404, etc
];

@NgModule({
  imports: [
    ComponentsRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
