import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPassComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
