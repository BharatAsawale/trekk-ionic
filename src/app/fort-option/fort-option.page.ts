import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-fort-option',
  templateUrl: './fort-option.page.html',
  styleUrls: ['./fort-option.page.scss'],
})
export class FortOptionPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  addFort(){
    this.router.navigate(["/fort"]);
  }
  addFortDetails(){
    this.router.navigate(["/fortdetails"]);
  }


}
