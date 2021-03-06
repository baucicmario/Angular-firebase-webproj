import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CimformComponent } from './cimform/cimform.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { KosarComponent } from './kosar/kosar.component';
import { UserLoginComponent } from './nav/user-login/user-login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'kosar', component:KosarComponent},
  {path:'cimform', component:CimformComponent},
  {path:'products', component:ProductsComponent},
  {path:'login', component:UserLoginComponent},
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
