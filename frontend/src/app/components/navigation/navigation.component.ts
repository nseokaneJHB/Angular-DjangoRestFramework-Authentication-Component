import { Component, OnInit } from '@angular/core';
import { APICallsService } from '../../service/apicalls.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	constructor(private __apiCall: APICallsService) { }

	// Decleration
	error: any = {}
	authorized: any = false

	// Get user on start
	ngOnInit(): void {
		this.__apiCall.getUser().subscribe((res: any) => {
			this.authorized = true
		}, (error: any) => {
			this.authorized = false
			this.error.statusText = error.statusText
			this.error.status = error.status
			console.log(this.authorized);
		})
	}

	// Sign out
	signout(){
		location.reload()
		localStorage.clear()
		location.href = '/';
	}

}
