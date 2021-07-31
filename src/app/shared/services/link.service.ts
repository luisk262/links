import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { URIS } from '../constants/uris';
import { ILoginData } from '../interfaces/login.interface';
import { ISingUpData } from '../interfaces/singup.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  postLogin(loginData: ILoginData) {
    return this.http.post(URIS.post.login, loginData, { observe: 'response' }).toPromise()
      .then((res: HttpResponse<any>) => {
        return res.body;
      })
  }
  postSingUp(singUpData: ISingUpData) {
    return this.http.post(URIS.post.singUp, singUpData, { observe: 'response' }).toPromise()
      .then((res: HttpResponse<any>) => {
        return res.body;
      })
  }
  getUserInfo() {
    return this.http.get(URIS.get.getUser, { observe: 'response' }).toPromise()
      .then((res: HttpResponse<any>) => {
        return res.body;
      })
  }

  getLinks() {
    return this.http.get(URIS.get.getLinks, { observe: 'response' }).toPromise()
      .then((res: HttpResponse<any>) => {
        console.log('resultado',res);
        return res;
      })
  }
}
