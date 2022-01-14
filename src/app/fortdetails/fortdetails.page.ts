import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { Fort } from '../fort/fort';
import { FortService } from '../services/fort.service';

@Component({
  selector: 'app-fortdetails',
  templateUrl: './fortdetails.page.html',
  styleUrls: ['./fortdetails.page.scss'],
})
export class FortdetailsPage implements OnInit {
  public token;
  currentUser:User;
  public forts:Fort[];
  

  constructor(
    private authService:AuthService,
    private router:Router,
    private fortService:FortService) { 
    this.authService.currentUser.subscribe(x=>this.currentUser=x);
  }

  ngOnInit() {
    // this.fort= this.authService.getAllForts();
    this.getForts();
  }

  public getForts():void{
    this.fortService.AllForts().subscribe(
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