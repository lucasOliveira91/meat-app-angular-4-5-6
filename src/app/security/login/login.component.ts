import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NotificarionService } from '../../shared/messages/notiication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificarionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(user => {
      this.notificationService.notify(`Welcome ${user.name}`);
    }, (error: HttpErrorResponse) => { //httpErrorResponse
      this.notificationService.notify(`${error.error.message}`);
    }, () => {
      this.router.navigate([atob(this.navigateTo)])
    });
  }

}
