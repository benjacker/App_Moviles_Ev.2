import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApService {
  apiURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + "/users");
  }

  validateUser(username: string, password: string): Observable<any> {
    return this.http.post(this.apiURL + "/validate", { username, password });
  }

  postUser(data: any): Observable<any> {
    return this.http.post(this.apiURL + "/users", data);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(this.apiURL + "/users/" + id, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.apiURL + "/users/" + id);
  }
}
