import { Injectable } from '@angular/core';
import { BDDService } from './bdd.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connectionStatus: boolean = false;

  constructor(private storage: BDDService) { }

  loginBDD(user: string, pass: string): Promise<boolean> {
    return this.storage
      .get(user)
      .then((res) => {
        if (res.password === pass) {
          this.connectionStatus = true;
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log('Error en el sistema: ' + error);
        return false;
      });
  }

  login(user: string, pass: string): boolean {
    if (user === 'taka' && pass === '123') {
      this.connectionStatus = true;
      return true;
    }
    this.connectionStatus = false;
    return false;
  }

  logout() {
    this.connectionStatus = false;
  }

  isConnected() {
    return this.connectionStatus;
  }

  registrar(user: any): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.storage.set(user.username, user).then((res) => {
        if (res != null) {
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }).catch((error) => {
        observer.next(false);
        observer.complete();
      });
    });
  }


  resetPassword(username: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {

      if (username) {
        observer.next(true); 
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }
}
