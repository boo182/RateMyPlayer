import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import {User} from '../../interfaces/interfaces';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  form; 
  validator;
  passwordInvalid: boolean;
  password: string;

  constructor() {
    this.validator = [
        Validators.required,
        Validators.maxLength(29),
        Validators.minLength(1),
      ]
  }

  ngOnInit() {
    this.password = 'test';
    this.passwordInvalid = false;
    this.form = new FormGroup ({
      userName: new FormControl('', this.validator),
      firstName: new FormControl('', this.validator),
      lastName: new FormControl('', this.validator),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        ]),
      password: new FormControl('', this.validator),
      passwordConf: new FormControl(''),
    });
  };


  onSubmit = (user) => {
    if(user.password === user.passwordConf) {
      console.log('success');
    } 
    else {
      this.form = new FormGroup ({
        passwordConf: new FormControl(''),
        password: new FormControl(''),
      });
    }
  }
}
