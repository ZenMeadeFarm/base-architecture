import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// all components in the auth module
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
