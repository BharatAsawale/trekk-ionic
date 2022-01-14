import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { Fort } from '../fort/fort';
import { FortService } from '../services/fort.service';
import { StateCityService } from '../services/state-city.service';

@Component({
  selector: 'app-fortdetails',
  templateUrl: './fortdetails.page.html',
  styleUrls: ['./fortdetails.page.scss'],
})
export class FortdetailsPage implements OnInit {
  public token;
  currentUser:User;
  public forts:Fort[];
  
  public states:any[];
  public cities:any[];
  public cityId;

  constructor(
    private authService:AuthService,
    private router:Router,
    private fortService:FortService,
    private stateCity:StateCityService) { 
    this.authService.currentUser.subscribe(x=>this.currentUser=x);
  }

  ngOnInit() {
    this.stateCity.allStates().subscribe((res)=>{
      this.states=res;
      console.log(this.states);
    })
  }

  getAllCities(id){
    this.stateCity.allCities(id).subscribe((res)=>{
      this.cities=res;
      console.log(this.cities);
    })
  }

  setCityId(id){
    this.cityId=id;
    console.log("cityid",this.cityId);
  }

  public getAllForts(cityId):void{
    this.setCityId(cityId);
    this.fortService.AllForts(cityId).subscribe(
      (response:Fort[])=>{
        this.forts = response;
        console.log(this.forts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  fortdetails(form){
    this.fortService.savefortdetials(form.value).subscribe(data =>
      {
        alert( "data Created Successfully");
      },
      error=>
     {
       alert("failed");
       console.log(error);
     });
  }

}