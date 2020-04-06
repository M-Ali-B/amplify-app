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
    constructor(private router: Router) {}
    ngOnInit(): void {
    }
 getWindow() {
     return window;
 }
    onSignOut() {
        // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
        // which means the user is signed out from all the devices
        // Note:ss although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)


        auth.signOut({global: true})
            .then(data => console.log(data))
            .catch(err => console.log(err));

        this.getWindow().localStorage.clear();
        this.router.navigateByUrl('/')

    }


}

