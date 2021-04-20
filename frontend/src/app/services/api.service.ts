import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	user: any = {
		token: localStorage.getItem('TOKEN'),
		user_id: localStorage.getItem('USER_ID'), 
		username: localStorage.getItem('USERNAME')
	}

	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': `Token ${this.user.token}`,
	});

	constructor(private __http: HttpClient) { }

	url: string = environment.URL;

	registerUser(user: any){
		return this.__http.post(`${this.url}/register/`, user)
	}

	loginUser(user: any){
		return this.__http.post(`${this.url}/tokenize/`, user)
	}

	getUser(){
		return this.__http.get(`${this.url}/profile/`, { headers: this.headers })
	}

	updateUser(user: any){
		return this.__http.put(`${this.url}/user/`, user, { headers: this.headers })
	}

	updateProfile(profile: any){
		return this.__http.put(`${this.url}/profile/`, profile, { headers: this.headers })
	}

	removeUserProfile(){
		return this.__http.delete(`${this.url}/profile/`, { headers: this.headers })
	}
}
