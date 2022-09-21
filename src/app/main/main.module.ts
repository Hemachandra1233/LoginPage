import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainsectionComponent } from './mainsection/mainsection.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    MainsectionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
