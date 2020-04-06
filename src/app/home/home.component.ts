import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
const auth = Auth;
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
    }

    onSignOut() {
        // auth.signOut()
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));

        // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
        // which means the user is signed out from all the devices
        // Note:ss although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)

        auth.currentAuthenticatedUser()
            .then(data => console.log(data))
            .catch(err => console.log(err));
        // console.log(auth);
        auth.signOut({ global: true })
            .then(data => console.log(data))
            .catch(err => console.log(err));
        auth.currentAuthenticatedUser()
             .then(data => console.log(data))
                .catch(err => console.log(err));
        //console.log(auth);
    }
}

