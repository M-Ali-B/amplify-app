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


        // code for user signup

        // auth.signUp({
        //     username: this.username,
        //     password: this.password,
        //     attributes: {
        //         email: this.email,          // optional
        //         phone_number: this.phoneNumber,   // optional - E.164 number convention
        //         // other custom attributes
        //     },
        //     validationData: []  // optional
        // })
        // .then(data => console.log(data))
        // .catch (err => console.log(err));

        // code for user verfication code sent to amazon for signup procedure

        //     auth.confirmSignUp(this.username, '367799', {
        //         // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        //         forceAliasCreation: true
        //     }).then(data => console.log(data))
        //         .catch(err => console.log(err));
        // }



        //         async function SignIn() {
        //     try {
        //         const user = await Auth.signIn(username, password);
        //         if (user.challengeName === 'SMS_MFA' ||
        //             user.challengeName === 'SOFTWARE_TOKEN_MFA') {
        //             // You need to get the code from the UI inputs
        //             // and then trigger the following function with a button click
        //             const code = getCodeFromUserInput();
        //             // If MFA is enabled, sign-in should be confirmed with the confirmation code
        //             const loggedUser = await Auth.confirmSignIn(
        //                 user,   // Return object from Auth.signIn()
        //                 code,   // Confirmation code
        //                 mfaType // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
        //             );
        //             }
        //     } catch (err) {
        //         if (err.code === 'UserNotConfirmedException') {
        //             // The error happens if the user didn't finish the confirmation step when signing up
        //             // In this case you need to resend the code and confirm the user
        //             // About how to resend the code and confirm the user, please check the signUp part
        //         } else if (err.code === 'PasswordResetRequiredException') {
        //             // The error happens when the password is reset in the Cognito console
        //             // In this case you need to call forgotPassword to reset the password
        //             // Please check the Forgot Password part.
        //         } else if (err.code === 'NotAuthorizedException') {
        //             // The error happens when the incorrect password is provided
        //         } else if (err.code === 'UserNotFoundException') {
        //             // The error happens when the supplied username/email does not exist in the Cognito user pool
        //         } else {
        //             console.log(err);
        //         }
        //     }
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
        .then(data => console.log(data))
        .catch (err => console.log(err));

        // code for user verfication code sent to amazon for signup procedure

        //     auth.confirmSignUp(this.username, '367799', {
        //         // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        //         forceAliasCreation: true
        //     }).then(data => console.log(data))
        //         .catch(err => console.log(err));
        // }

    }
    }
}
 // code for confirmation code resent
// Auth.resendSignUp(username).then(() => {
//     console.log('code resent successfully');
// }).catch(e => {
//     console.log(e);
// });
