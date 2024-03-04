import { Component, ComponentFactoryResolver, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { LocationStrategy } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  showPassword = false;
  loading = false;
  disable = false;
  selectedValues = false;
  checked: any;
  // isAuthenticated = false;
  // showPassword: boolean = true;
  hide = true;
  registerForm: FormGroup;
  login: string = '';
  password: string = '';
  res: string = "Please review the fields";
  isAuthenticated = false;
  loadingData: any;
  constructor(private router: Router, private Location: LocationStrategy, private snackBar: MatSnackBar,
    private http: HttpClient, public matdialog: MatDialog) {


  }




  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),

    })
  }

  FnclickCheckbox() {
    this.selectedValues = true;
    this.showPassword = !this.showPassword
  }

  onSubmit() {
    this.router.navigate(['task']);


  }



}

