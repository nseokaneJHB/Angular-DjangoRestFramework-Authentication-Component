import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
	user: any = {
		token: localStorage.getItem('TOKEN'),
		user_id: localStorage.getItem('USER_ID'), 
		username: localStorage.getItem('USERNAME')
	}

	constructor(private __router: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
		if (this.user.token !== null && this.user.user_id !== null && this.user.username !== null) {
			return this.__router.parseUrl("/home");;
		}else{
			return true;
		}
	}
}
