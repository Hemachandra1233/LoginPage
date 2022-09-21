import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { MainRoutingModule } from '../main/main-routing.module';


@NgModule({
  declarations: [
    StartingpageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MainRoutingModule
  ]
})
export class LoginModule { }
