import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
	user: any = {
		token: localStorage.getItem('TOKEN'),
		user_id: localStorage.getItem('USER_ID'), 
		username: localStorage.getItem('USERNAME')
	}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.user.token !== null && this.user.user_id !== null && this.user.username !== null) {
			return false;
		}else{
			return true;
		}
	}
}
