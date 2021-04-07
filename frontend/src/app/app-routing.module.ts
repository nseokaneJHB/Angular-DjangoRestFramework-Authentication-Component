import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Added Components
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

// Guards
import { RoutesGuard } from './gaurds/routes.guard';
import { LoginRegisterGuard } from './gaurds/login-register.guard';

const routes: Routes = [
	{ path: '', component: LoginRegisterComponent, canActivate: [LoginRegisterGuard] },
	{ path: 'profile', component: ProfileComponent, canActivate: [RoutesGuard] },
	{ path: 'home', component: HomeComponent, canActivate: [RoutesGuard] },
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	
	{ path: '404', component: NotfoundComponent },
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
