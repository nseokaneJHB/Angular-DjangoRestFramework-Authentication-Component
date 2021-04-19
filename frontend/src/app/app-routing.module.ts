import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Added Components
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

// Guards
import { RoutesGuard } from './guards/routes.guard';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
	{ path: 'authentication', component: AuthenticationComponent, canActivate: [AuthenticationGuard] },
	{ path: 'profile', component: ProfileComponent, canActivate: [RoutesGuard] },
	{ path: '', component: HomeComponent, canActivate: [RoutesGuard] },
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	
	// Error page
	{ path: '404', component: NotfoundComponent },
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
