import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class StateCityService {
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

  allStates():Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.TREKK_SERVER_ADDRESS}/state/all`);
  }

  allCities(id):Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.TREKK_SERVER_ADDRESS}/city/state/${id}`);
  }

  getCities():Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.TREKK_SERVER_ADDRESS}/city/state/1`);
  }
}
