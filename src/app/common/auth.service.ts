import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginInfo } from './login-info';
import { User } from './user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private userSubject = new Subject<any>();
  public user$ = this.userSubject.asObservable();

  private user: User;

  constructor(private http: HttpClient) {
  }

  public login(userInfo: LoginInfo): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, userInfo)
      .pipe(map((response: any) => {
        this.user = response.data;
        this.userSubject.next(this.user);
        return response;
      }));
  }

  public register(userInfo: LoginInfo): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/register`, userInfo);
  }

  public logout(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/auth/logout`)
      .pipe(map((response: any) => {
        this.user = undefined;
        this.userSubject.next();
        return response;
      }));
  }

  public fetchUser(): Observable<User> {
    return this.http.get(`${environment.apiUrl}/auth/user`)
      .pipe(map((response: User) => {
        this.user = response;
        this.userSubject.next(this.user);
        return this.user;
      }));
  }

  public tryGetUser(): Observable<User> {
    if (this.user) {
      return of(this.user);
    }
    return this.fetchUser();
  }
}