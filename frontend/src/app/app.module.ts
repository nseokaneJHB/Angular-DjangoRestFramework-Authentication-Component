
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PasswordResetComponent } from './components/password/password-reset/password-reset.component';
import { PasswordConfirmComponent } from './components/password/password-confirm/password-confirm.component';

import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		AuthenticationComponent,
		HomeComponent,
		NavigationComponent,
		NotfoundComponent,
		ProfileComponent,
		PasswordResetComponent,
		PasswordConfirmComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MDBBootstrapModule.forRoot(),
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		SocialLoginModule
	],
	providers: [
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
			  autoLogin: false,
			  providers: [
				{
					id: FacebookLoginProvider.PROVIDER_ID,
					provider: new FacebookLoginProvider(
						environment.SOCIAL_AUTH_FACEBOOK_KEY
					)
				},
				{
					id: GoogleLoginProvider.PROVIDER_ID,
					provider: new GoogleLoginProvider(
					  	environment.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY
					)
				  }
			  ]
			} as SocialAuthServiceConfig,
		}    
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
