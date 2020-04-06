import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'app', component: AppComponent },
     { path: 'main', component: MainComponent },
    { path: '', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
