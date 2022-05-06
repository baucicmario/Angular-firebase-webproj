import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CimformComponent } from './cimform/cimform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'cimform', component:CimformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
