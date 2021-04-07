import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { APICallsService } from '../../service/apicalls.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	// Form
	profileForm: any = new FormGroup({
		"username": new FormControl(''),
		"email": new FormControl(''),
		"first_name" : new FormControl(''),
		"last_name" : new FormControl(''),
		"phone" : new FormControl(''),
		"bio" : new FormControl(''),
		"avatar" : new FormControl('')
	})

	constructor(private __apiCall: APICallsService) { }

	ngOnInit(): void {
		this.__apiCall.getUser().subscribe((res: any) => {
			console.log(res);
			this.profileForm.patchValue({
				"username": res.username,
				"email": res.email,
				"first_name": res.first_name,
				"last_name": res.last_name,
				"phone": res.profile.phone,
				"bio": res.profile.bio,
				"avatar": res.profile.avatar
			});
		})
	}

	submit(){
		console.log(this.profileForm.value);
	}
}
