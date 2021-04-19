import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	username: any = ""

	constructor(private __api: ApiService) { }

	ngOnInit(): void {
		this.__api.getUser().subscribe((res: any) => {
			this.username = res.username
		}, (errors: any) => {
			console.log(errors);
		})
	}

}
