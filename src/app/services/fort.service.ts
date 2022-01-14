import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user';
import { Fort } from '../fort/fort';
import { Fortdetails } from '../fort/fortdetails';

@Injectable({
  providedIn: 'root'
})
export class FortService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // TREKK_SERVER_ADDRESS: string  =  "https://spring-register-signin.herokuapp.com"; 
  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  savefortdetials(fortdetails:Fortdetails):Observable<any>{
    return this.httpClient.post(`${environment.TREKK_SERVER_ADDRESS}/fortdetails/add/1002`, fortdetails);
  }

  saveFort(fort:Fort):Observable<any>{
    return this.httpClient.post(`${environment.TREKK_SERVER_ADDRESS}/fort/add`,fort);
  }

  saveFortMar(fort:Fort):Observable<any>{
    return this.httpClient.post(`${environment.TREKK_SERVER_ADDRESS}/mar/fort/add`,fort);
  }

  getAllForts(){
    return this.httpClient.get(`${environment.TREKK_SERVER_ADDRESS}/fort/all`).subscribe((res)=>{
      console.log("all fort",res);
      return res;
    });
  }

  AllForts(id):Observable<Fort[]>{
    return this.httpClient.get<Fort[]>(`${environment.TREKK_SERVER_ADDRESS}/fort/city/${id}`);
  }
}
