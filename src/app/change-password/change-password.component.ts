import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import {Auth} from 'aws-amplify';
const auth = Auth;
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

    form: FormGroup;
    constructor(public amplify: AmplifyService, private fb: FormBuilder, private router: Router) {

        this.form = this.fb.group({
            oldPassword: '',
            newPassword: ''
        });
    }

  ngOnInit() {
  }

    changePassword(){
        auth.currentAuthenticatedUser()
            .then(user => {
                return Auth.changePassword(user, this.form.value.oldPassword, this.form.value.newPassword);
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}
