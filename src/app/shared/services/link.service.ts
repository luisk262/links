import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { URIS } from '../constants/uris';
import { ILoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  postLogin(loginData: ILoginData) {
    return this.http.post(URIS.login, loginData, { observe: 'response' }).toPromise()
      .then((res: HttpResponse<any>) => {
        return res.body;
      })
  }
}
