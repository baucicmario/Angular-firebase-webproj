import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CimformComponent } from './cimform/cimform.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserLoginComponent } from './nav/user-login/user-login.component';
import {MatBadgeModule} from '@angular/material/badge';
import { DefaultPipe } from './default.pipe'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule  } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';


import { environment } from '../environments/environment';

import { AngularFireStorageModule, BUCKET  } from '@angular/fire/compat/storage';
import { MatSortModule } from '@angular/material/sort';
import { KosarComponent } from './kosar/kosar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CimformComponent,
    ProductsComponent,
    UserLoginComponent,
    DefaultPipe,
    KosarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSortModule,
    
  ],
  providers: [
    { provide: BUCKET, useValue: 'my-bucket-name' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
