import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Establece el token de sesión en el local storage
   */
  set setAuthToken(token: string) {
    localStorage.setItem('AuthToken', token);
  }

  /**
   * Retorna el token desde el local storage
   */
  get getAuthToken(): string {
    return JSON.parse(localStorage.getItem('AuthToken') || '{}');
  }

  /**
   * Retorna true si hay token en local storage
   */
  get authState(): boolean {
    return (localStorage.getItem('AuthToken')) ? true : false;
  }

  /**
   * Limpia la sesión del localstorage
   */
  closeSession(): void {
    localStorage.removeItem('AuthToken');
  }
}
