import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingpageComponent } from './startingpage/startingpage.component';

const routes: Routes = [{path: "", component: StartingpageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
