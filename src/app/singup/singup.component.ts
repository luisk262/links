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

  singupForm: FormGroup;

  constructor(
    private linkService: LinkService,
    private router: Router,
    private authService: AuthService,
    private menuService: MenuService) {

    this.singupForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });

    this.menuService.setMenu({
      title: 'Login',
      url: '/'
    });


  }

  doSingUp(): void {

    if (this.singupForm.valid) {

      this.linkService.postSingUp({
        name: this.singupForm.controls.name.value,
        email: this.singupForm.controls.email.value,
        password: this.singupForm.controls.password.value
      }).then(({ id }) => {
        console.log('---->[signup][Respone]', id);
        if (id == "1") {
          this.router.navigateByUrl('/');
        } else {
           alert('Registro Invalido');
        }
      });
    }
  }

  setSession(token: string) {
    
    this.authService.setAuthToken = token;
    this.router.navigateByUrl('dashboard');

  }

}
