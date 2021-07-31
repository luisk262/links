import { Component, OnInit } from '@angular/core';
import { LinkService } from '../shared/link.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
  }

  login():void {
    console.log('login');
    const data = {
      "email": "email@email.com",
      "password": "123213"
    };
    
    this.linkService.postLogin(data).then((result) => {
      console.log('result', result);
    });
  }

}
