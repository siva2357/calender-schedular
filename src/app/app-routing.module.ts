import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderPageComponent } from './Front-End/views/pages/calender-page/calender-page.component';

const routes: Routes = [
  { path:"**", redirectTo:"calender-page"},
  { path:"calender-page", component:CalenderPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
