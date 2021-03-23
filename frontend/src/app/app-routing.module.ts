import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Added Components
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: LoginRegisterComponent},
	{ path: 'home', component: HomeComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
