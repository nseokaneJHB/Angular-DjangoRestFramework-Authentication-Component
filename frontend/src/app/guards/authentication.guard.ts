import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	user: any = JSON.parse(localStorage.getItem("FULL_STACK_AUTH_COMP_USER"));

	constructor(private __router: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
		if (this.user) {
			return this.__router.parseUrl("/home");
		}
		return true;
	}
}
