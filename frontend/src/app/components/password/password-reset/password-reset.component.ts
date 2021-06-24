import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
	selector: 'app-password-reset',
	templateUrl: './password-reset.component.html',
	styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

	constructor(private __api: ApiService) { }

	errors: any = {};

	passwordResetForm: any = new FormGroup({
		"email": new FormControl('')
	})

	ngOnInit(): void {
		
	}

	resetPassword(){
		console.log(this.passwordResetForm.value);
		this.__api.passwordReset(this.passwordResetForm.value).subscribe((res: any) => {
			console.log(res);
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
