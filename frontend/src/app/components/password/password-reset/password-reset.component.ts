import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-password-reset',
	templateUrl: './password-reset.component.html',
	styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

	constructor(private __api: ApiService, private __router: Router) { }

	errors: any = {};
	success: boolean = false

	passwordResetForm: any = new FormGroup({
		"email": new FormControl('')
	})

	ngOnInit(): void {}

	resetPassword(){
		this.__api.passwordReset(this.passwordResetForm.value).subscribe((res: any) => {
			this.passwordResetForm.reset();
			this.success = true;

			setTimeout(() => {
				this.success = false;
				this.__router.navigate(["/"])
			}, 5000);

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
