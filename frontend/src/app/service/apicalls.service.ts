import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class APICallsService {

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

	url: string = 'http://127.0.0.1:8000/api';

	loginUser(user: any){
		return this.__http.post(`${this.url}/tokenize/`, user)
	}

	getUser(){
		return this.__http.get(`${this.url}/profile/`, { headers: this.headers })
	}
}
