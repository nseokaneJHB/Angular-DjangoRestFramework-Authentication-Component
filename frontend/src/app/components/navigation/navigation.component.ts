import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

	// Decleration
	username: string;
	error: any = {}
	authorized: boolean = false;

	constructor(private __api: ApiService) { }

	// Get user on start
	ngOnInit(): void {
		
		this.__api.getUser().subscribe((res: any) => {
			this.username = res.username
			this.authorized = true
		}, (error: any) => {
			this.authorized = false
			this.error.statusText = error.statusText
			this.error.status = error.status
		})
	}

	// Sign out
	signout(){
		localStorage.clear()
		location.href = 'authentication';
	}
}
