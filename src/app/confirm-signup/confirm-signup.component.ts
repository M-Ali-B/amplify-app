import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
const auth = Auth;

@Component({
    selector: 'app-confirm-signup',
    templateUrl: './confirm-signup.component.html',
    styleUrls: ['./confirm-signup.component.css']
})
export class ConfirmSignupComponent implements OnInit {
    form: FormGroup;
    constructor(public amplify: AmplifyService, private fb: FormBuilder, private router: Router) {

        this.form = this.fb.group({
            username: '',
            code: ''
        });
    }
    ngOnInit() {
    }

    confirmUserSignUp() {
        auth.confirmSignUp(this.form.value.username, this.form.value.code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => {
            console.log(data);
            if (data) {
            this.router.navigateByUrl('/home');
        }
        })
            .catch(err => console.log(err));

    }

    toSignUp() {
        this.router.navigateByUrl('/app');
    }
}
