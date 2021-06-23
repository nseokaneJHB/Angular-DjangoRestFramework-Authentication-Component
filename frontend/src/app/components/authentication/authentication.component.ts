import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

	alert_message: string = "";
	username: string = "";
	errors: any = {};

	// Forms
	loginForm: any = new FormGroup({
		"username": new FormControl(''),
		"password": new FormControl(''),
		"jwt": new FormControl(true)
	});

	registerForm: any = new FormGroup({
		"username": new FormControl(''),
		"first_name": new FormControl(''),
		"last_name": new FormControl(''),
		"email": new FormControl(''),
		"password": new FormControl(''),
		"password2": new FormControl('')
	});

	constructor(private __api: ApiService) { }

	load(){
		let alert: any = document.getElementById('register_alert');
		let login_button: any = document.getElementById('login_button');
		let register_form: any = document.getElementById('register_form');

		let expiry = JSON.parse(localStorage.getItem("EXPIRE"));

		login_button.style.display = 'none';
		register_form.style.display = 'none';

		if (expiry) {
			setTimeout(() => {
				this.alert_message = expiry.register_message;
				this.username = expiry.username;
				alert.style.display = 'block';
				localStorage.clear();
			}, 500);

			setTimeout(() => {
				alert.style.display = 'none';
				localStorage.clear();
			}, 5000);
		}
	}

	ngOnInit(): void {
		document.getElementById('register_alert').style.display = 'none';
		this.load();
	}

	// Show register form when "show sign up" is clicked and vise verse
	openRegister(){
		let login_form: any = document.getElementById('login_form');
		let login_button: any = document.getElementById('login_button');

		let register_form: any = document.getElementById('register_form');
		let register_button: any = document.getElementById('register_button');

		login_form.style.display = 'none';
		register_button.style.display = 'none';

		login_button.style.display = 'block';
		register_form.style.display = 'block';

		this.errors = {};
	}

	// Show login form when "show sign in" is clicked and vise verse
	openLogin(){
		let login_form: any = document.getElementById('login_form');
		let login_button: any = document.getElementById('login_button');

		let register_form: any = document.getElementById('register_form');
		let register_button: any = document.getElementById('register_button');

		login_button.style.display = 'none';
		register_form.style.display = 'none';

		login_form.style.display = 'block';
		register_button.style.display = 'block';
		
		this.errors = {};
	}

	login(){
		console.log(this.loginForm.value);

		this.__api.loginUser(this.loginForm.value).subscribe((res: any) => {

			localStorage.setItem("FULL_STACK_AUTH_COMP_USER", JSON.stringify({"token": res.token, "user_id": res.user_id, "username": res.username}))
			localStorage.setItem("TOKEN", res.token);
			localStorage.setItem("USER_ID", res.user_id);
			localStorage.setItem("USERNAME", res.username);			

			this.loginForm.reset();
			location.href = '/';
		}, (errors: any) => {
			this.showError(errors.error);
		});
	}

	register(){
		let username = this.registerForm.value.username;
		let expiry: any = {
			'register_message': 'Successfully registered as',
			'username': username
		};

		this.__api.registerUser(this.registerForm.value).subscribe((res: any) => {
			localStorage.setItem("EXPIRE", JSON.stringify(expiry));
			this.registerForm.reset();
			location.href = 'authentication';
		}, (errors: any) => {
			this.showError(errors.error);
		});
	}

	showError(error: any){
		this.errors = error;

		setTimeout(() => {
			this.errors = {};
		}, 5000);
	}
}
