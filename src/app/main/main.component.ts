import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
const auth = Auth;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    username = 'ali';
    password = 'password';
    email = 'ali@smsami.com';
    phoneNumber = '+923339501405';
    form: FormGroup;
    alreadyMember = false;
    notMember = true;
    constructor(public amplify: AmplifyService, private fb: FormBuilder, private router: Router) {

        this.form = this.fb.group({
            username: '',
            password: '',
            email: '',
        });
    }
    ngOnInit(): void {
    }

    toggle() {
        this.form.reset();
        this.alreadyMember = false;
        this.notMember = true;
    }

    toggle1() {
        //  this.form.reset();
        this.alreadyMember = true;
        this.notMember = false;
    }

    onSubmit() {
        if (!this.alreadyMember) {
            const user = auth.signIn(this.form.value.username, this.form.value.password)
                .then(data => {
                    console.log(data);
                    if (data) {
                        this.router.navigateByUrl('/home');
                    }
                })
                .catch(err => console.log(err.message));

            console.log(user);
        }
        if (!this.notMember) {
            // code for user signup

            auth.signUp({
                username: this.form.value.username,
                password: this.form.value.password,
                attributes: {
                    email: this.form.value.email,          // optional
                    phone_number: this.phoneNumber,   // optional - E.164 number convention
                    // other custom attributes
                },
                validationData: []  // optional
            })
                .then(data => {
                    console.log(data);

                    if (data) {
                        this.router.navigateByUrl('/confirm-signup');
                    }
                })
                .catch(err => console.log(err));
        }
    }

    forgotPassword(){
        this.router.navigateByUrl('/forgot-password');
    }
}
