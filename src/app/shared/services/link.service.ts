import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { URIS } from '../constants/uris';
import { ILoginData } from '../interfaces/login.interface';
import { ISingUpData } from '../interfaces/singup.interface';
import { ILinkData } from '../interfaces/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  headers = new HttpHeaders({
    'content-type': 'Aplication/json',
    'Token': `${localStorage.getItem('AuthToken')}`
  })

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
    return this.http.get(URIS.get.getLinks, { observe: 'response', headers: this.headers, responseType: 'text' }).toPromise()
      .then((res: HttpResponse<any>) => {
        /* Esto no se hace, pero como el json de ejemplo esta mal formado, 
        se realizo un parche, para poder usar la solicitud"*/

        let body = '{' + res.body + '}';
        body = body.replace('name', '"name":');
        body = body.replace(`},\n]`, '}\n]');

        return JSON.parse(String(body));

      })
  }

  postLink(link: ILinkData) {
    return this.http.post(URIS.post.createLink, link, { observe: 'response', headers: this.headers, responseType: 'text' }).toPromise()
      .then((res: HttpResponse<any>) => {
        /* Esto no se hace, pero como el json de ejemplo esta mal formado, 
       se realizo un parche, para poder usar la solicitud"*/

        let body = '{' + res.body + '}';
        body = body.replace('name', '"name":');
        body = body.replace(`},\n]`, '}\n]');
        return JSON.parse(String(body));
      })
  }

  deleteLink(id: string | undefined) {
    return this.http.delete(`${URIS.delete.deleteLink}/${id}`, { observe: 'response', headers: this.headers, responseType: 'text' }).toPromise()
      .then((res: HttpResponse<any>) => {
        /* Esto no se hace, pero como el json de ejemplo esta mal formado, 
       se realizo un parche, para poder usar la solicitud"*/

        let body = '{' + res.body + '}';
        body = body.replace('name', '"name":');
        body = body.replace(`},\n]`, '}\n]');
        return JSON.parse(String(body));
      })
  }
}
