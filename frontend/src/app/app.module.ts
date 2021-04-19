
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    NavigationComponent,
    NotfoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
