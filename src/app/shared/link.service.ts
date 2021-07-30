import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { URIS } from '../common/constansts/uris';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  postLogin(data:any) {
    return this.http.post( URIS.login,data, { observe: 'response' }).toPromise()
    .then((res: HttpResponse<any>) => {
      console.log('respuesta',res);
      //return new Utilities().setCustomResponse(res, true);
    }).catch(err => {
     // return new Utilities().setCustomResponse(err, false);
    });
  }
}
