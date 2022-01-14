import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { FortService } from '../services/fort.service';
import { StateCityService } from '../services/state-city.service';

@Component({
  selector: 'app-fort',
  templateUrl: './fort.page.html',
  styleUrls: ['./fort.page.scss'],
})
export class FortPage implements OnInit {

  currentUser:User;

  public states:any[];
  public cities:any[];
  public fortdata;
  public cityId;

  fortReqMar={
    id:null,
    fortName:null,
    cityId:null,
  }
  fortReq={
    id:null,
    fortName:null,
    cityId:null,
  }

  constructor(private authService:AuthService,
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

  savefort(addform : NgForm){
    this.fortdata=addform.value;
    console.log("fortdata",this.fortdata);
    // fortdata {id: '454', fortNameE: 'bkjh', fortNameM: 'jhvjk'}
    this.fortReq.id=this.fortdata.id;
    this.fortReq.fortName=this.fortdata.fortNameE;
    this.fortReq.cityId=this.cityId;
    console.log("fortReq",this.fortReq);

    this.fortReqMar.id=this.fortdata.id;
    this.fortReqMar.fortName=this.fortdata.fortNameE;
    this.fortReqMar.cityId=this.cityId;
    console.log("fortReqMar",this.fortReqMar);

    this.fortService.saveFort(this.fortReq).subscribe((res)=>{
      alert("fort saved sucess");
    },
    error=>{
      alert(error);
    });

    this.fortService.saveFortMar(this.fortReqMar).subscribe((res)=>{
      alert("fort mar save sucess");
    },
    error=>{
      alert(error);
    });
  } 

}


