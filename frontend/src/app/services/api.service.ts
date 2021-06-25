import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	headers: any = {}

	constructor(private __http: HttpClient) { }

	url: string = environment.URL;

	registerUser(user: any){
		return this.__http.post(`${this.url}/register/`, user)
	}

	loginUser(user: any){
		let authUser = {
			"username": user.username, 
			"password": user.password
		}

		if (user.jwt) {
			return this.__http.post(`${this.url}/json-token/`, authUser )
		}

		return this.__http.post(`${this.url}/token/`, authUser )
	}

	socialLogin(details: any){
		console.log(details);
		
		// return this.__http.post(`${this.url}/social-auth/convert-token/`, details)
	}

	getHeaders(){
		let user: any = JSON.parse(localStorage.getItem("FULL_STACK_AUTH_COMP_USER"));

		if (user) {
			if (user.access && user.refresh) {
				return new HttpHeaders({
					'Content-Type': 'application/json',
					'Authorization': `JWT ${user.access}`
				});
			}
	
			return new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': `token ${user.token}`
			});
		}

		return
	}

	getUser(){
		return this.__http.get(`${this.url}/profile/`, { headers: this.getHeaders() })
	}

	updateUser(user: any){
		return this.__http.put(`${this.url}/user/`, user, { headers: this.getHeaders() })
	}

	updateProfile(profile: any){
		return this.__http.put(`${this.url}/profile/`, profile, { headers: this.getHeaders() })
	}

	removeUserProfile(){
		return this.__http.delete(`${this.url}/profile/`, { headers: this.getHeaders() })
	}

	passwordReset(email: any){
		return this.__http.post(`${this.url}/password-reset/`, email )
	}

	passwordConfirm(email_token: any){
		return this.__http.post(`${this.url}/password-reset/confirm/`, email_token )
	}
}
