import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
const auth = Auth;

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    form: FormGroup;
    proceed = false;
    constructor(public amplify: AmplifyService, private fb: FormBuilder, private router: Router) {

        this.form = this.fb.group({
            username: '',
            code: '',
            newpassword: ''
        });
    }

    ngOnInit() {
    }
    changePassword() {
        auth.forgotPasswordSubmit(this.form.value.username,
            this.form.value.code, this.form.value.newpassword)
            .then(data => {
                console.log(data);
                this.getWindow().localStorage.clear();
                this.router.navigateByUrl('/app');

            }
            )
            .catch(err => console.log(err));


    }

    getUserName() {
        this.proceed = true;
        auth.forgotPassword(this.form.value.username)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    getWindow() {
        return window;
    }
}
