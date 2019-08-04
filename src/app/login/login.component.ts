import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginStatus: string;
  message: string;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.loginStatus = undefined;
        this.router.navigate(['repositories']);
      },
      (err: any) => {
        this.loginStatus = 'error';
        if (err instanceof HttpErrorResponse) {
          this.message = err.error.message;
        }
      }
    );
  }
}
