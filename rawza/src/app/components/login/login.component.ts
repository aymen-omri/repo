import { Component, OnInit } from '@angular/core';
import { FormsModule , FormControl , ReactiveFormsModule , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

userForm = new FormGroup ({
  'user' : new FormControl ('' , Validators.required) , 
  'pass' : new FormControl('' , Validators.required )
})

subUser(){}



}
