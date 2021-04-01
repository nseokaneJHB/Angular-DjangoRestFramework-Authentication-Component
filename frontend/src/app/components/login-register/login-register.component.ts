import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { APICallsService } from '../../service/apicalls.service';

@Component({
	selector: 'app-login-register',
	templateUrl: './login-register.component.html',
	styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {

	// Forms
	loginForm: any = new FormGroup({
		"username": new FormControl(''),
		"password": new FormControl('')
	})

	registerForm: any = new FormGroup({
		"username": new FormControl(''),
		"first_name": new FormControl(''),
		"last_name": new FormControl(''),
		"email_address": new FormControl(''),
		"password": new FormControl('')
	})

	constructor(private __apiCall: APICallsService) { }


	ngOnInit(): void {
		// Hide register form and "show sign in" button initially
		let login_button: any = document.getElementById('login-button');
		let register_form: any = document.getElementById('register-form');

		login_button.style.display = 'none';
		register_form.style.display = 'none';
	}

	// Show register form when "show sign up" is clicked and vise verse
	openRegister(){
		let login_form: any = document.getElementById('login-form');
		let login_button: any = document.getElementById('login-button');

		let register_form: any = document.getElementById('register-form');
		let register_button: any = document.getElementById('register-button');

		login_form.style.display = 'none';
		register_button.style.display = 'none';

		login_button.style.display = 'block';
		register_form.style.display = 'block';
	}

	// Show login form when "show sign in" is clicked and vise verse
	openLogin(){
		let login_form: any = document.getElementById('login-form');
		let login_button: any = document.getElementById('login-button');

		let register_form: any = document.getElementById('register-form');
		let register_button: any = document.getElementById('register-button');

		login_button.style.display = 'none';
		register_form.style.display = 'none';

		login_form.style.display = 'block';
		register_button.style.display = 'block';
	}

	// Submit forms
	login(){
		this.__apiCall.loginUser(this.loginForm.value).subscribe((res: any) => {
			localStorage.setItem('TOKEN', res.token)
			localStorage.setItem('USER_ID', res.user_id)
			localStorage.setItem('USERNAME', res.username)
			this.loginForm.reset()
			location.href = 'home'
		}, (errors: any) => {
			for (const error in errors.error) {
				console.log(errors.error[error]);
			}
		})
	}

	register(){
		console.log(this.registerForm.value);
		this.registerForm.reset()
	}
}
