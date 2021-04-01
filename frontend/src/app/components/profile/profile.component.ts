import { Component, OnInit } from '@angular/core';
import { APICallsService } from '../../service/apicalls.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(private __apiCall: APICallsService) { }

	ngOnInit(): void {
		this.__apiCall.getUser().subscribe((res: any) => {
			console.log(res);
		})
	}

}
