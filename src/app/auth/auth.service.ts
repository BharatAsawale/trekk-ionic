import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject, observable } from  'rxjs';
import { User } from  './user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  login(user: User): Observable<any> {
    return this.httpClient.post(`${environment.TREKK_SERVER_ADDRESS}/api/auth/signin`, user).pipe(
      tap(async (res) => {
        console.log("res.user",res);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("ACCESS_TOKEN", res.accessToken);
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.currentUserSubject.next(res);
        return res
      })
    );
  }

}