import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'app', component: AppComponent },
    { path: 'main', component: MainComponent },
    { path: 'confirm-signup', component: ConfirmSignupComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
