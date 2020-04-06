import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
const auth = Auth;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(): void {
        this.router.navigateByUrl('/main');
    }

}

