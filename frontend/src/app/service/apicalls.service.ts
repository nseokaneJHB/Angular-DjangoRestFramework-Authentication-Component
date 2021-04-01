import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class APICallsService {

	constructor(private __http: HttpClient) { }

	url: string = 'http://127.0.0.1:8000/api';

	loginUser(user: any){
		return this.__http.post(`${this.url}/tokenize/`, user)
	}

	getUser(){
		return this.__http.get(`${this.url}/profile/`)
	}
}
