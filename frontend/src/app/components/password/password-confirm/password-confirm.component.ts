import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-password-confirm',
	templateUrl: './password-confirm.component.html',
	styleUrls: ['./password-confirm.component.scss']
})
export class PasswordConfirmComponent implements OnInit {

	constructor(private __api: ApiService, private __router: Router) { }

	errors: any = {};
	success: boolean = false

	passwordConfirmForm: any = new FormGroup({
		"password": new FormControl(''),
		"token": new FormControl('')
	})

	ngOnInit(): void {
		let token_string =  location.search.slice(location.search.indexOf("=") + 1)
		this.passwordConfirmForm.patchValue({"token": token_string})
	}

	confirmPassword(){
		this.__api.passwordConfirm(this.passwordConfirmForm.value).subscribe((res: any) => {
			this.passwordConfirmForm.reset();
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
