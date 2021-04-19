import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	title: string = "";
	username: string = "";
	avatar_link: string = "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

	// Form
	profileForm: any = new FormGroup({
		"username": new FormControl(''),
		"email": new FormControl(''),
		"first_name" : new FormControl(''),
		"last_name" : new FormControl(''),
		"phone" : new FormControl(''),
		"title" : new FormControl(''),
		"bio" : new FormControl(''),
		"avatar" : new FormControl('')
	});

	validatingForm: FormGroup;

	constructor(private __api: ApiService) { }

	ngOnInit(): void {
		this.load()
	}

	load(){
		this.__api.getUser().subscribe((res: any) => {
			let { username, email, first_name, last_name, account } = res
			let { phone, title, bio, avatar} = account
			
			this.profileForm.patchValue({
				"first_name": first_name,
				"last_name": last_name,
				"username": username,
				"avatar": avatar,
				"email": email,
				"phone": phone,
				"title": title,
				"bio": bio
			});

			if (avatar !== "") {
				(document.getElementById('profile_link') as HTMLImageElement).src = avatar;	
			} else {
				(document.getElementById('profile_link') as HTMLImageElement).src = this.avatar_link;	
			}
		
			this.username = `${username}'s avatar`;
			this.title = title;
		})
	}

	saveLink(){
		let imgURL = (document.getElementById("profile_link") as HTMLImageElement)

		this.profileForm.patchValue({
			"title": this.profileForm.value.title,
			"avatar": this.profileForm.value.avatar
		});

		this.title = this.profileForm.value.title
		if (this.profileForm.value.avatar !== "") {
			imgURL.src = this.profileForm.value.avatar
		}else{
			imgURL.src = this.avatar_link
		}
	}

	submit(){
		let formValues = this.profileForm.value

		let user = {
			"username": formValues.username,
			"email": formValues.email,
			"first_name": formValues.first_name,
			"last_name": formValues.last_name
 		}

		 let profile = {
			"account": {
				"avatar": formValues.avatar,
				"bio": formValues.bio,
				"phone": formValues.phone,
				"title": formValues.title
			}
		}
		
		this.__api.updateUser(user).subscribe((user_res: any) => {
			this.__api.updateProfile(profile).subscribe((profile_res: any) => {
				this.load()
			}, (error: any)=> {
				console.log(error);
			})
		}, (error: any) => {
			console.log(error);
		})
	}

	delete(){
		this.__api.removeUserProfile().subscribe((res: any) => {
			localStorage.clear()
			location.href = 'authentication';
		}, (error: any) => {
			console.log(error);
		})
	}
}
