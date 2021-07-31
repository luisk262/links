import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { LinkService } from '../shared/services/link.service';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingUpComponent {

  public singUp = true;
  loginForm: FormGroup;

  constructor(
    private linkService: LinkService,
    private router: Router,
    private authService: AuthService,
    private menuService: MenuService) {

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });

    this.menuService.setMenu({
      title: 'Login',
      url: '/'
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
