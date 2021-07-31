import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuData } from '../shared/interfaces/menu.interface';
import { AuthService } from '../shared/services/auth.service';
import { LinkService } from '../shared/services/link.service';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private linkService: LinkService,
    private router: Router,
    private authService: AuthService,
    private menuService: MenuService
  ) {

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    this.menuService.setMenu({
      title: 'SINGUP',
      url: 'singup'
    });
  }

  doLogin(): void {

    if (this.loginForm.valid) {
      this.linkService.postLogin({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }).then(({ token }) => {
        if (token) {
          this.setSession(token)
        } else {
          console.log('Credenciales invalidas');
        }
      });
    }
  }

  setSession(token: string) {
    this.authService.setAuthToken = token;
    this.router.navigateByUrl('dashboard');
  }

}
