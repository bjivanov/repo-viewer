import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  status: string;
  message: string;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.value).subscribe(
      (data: any) => {
        this.status = undefined;
        this.router.navigate(['/login']);
      },
      (err: any) => {
        this.status = 'error';
        if (err instanceof HttpErrorResponse) {
          this.message = err.error.message;
        }
      }
    );
  }
}
