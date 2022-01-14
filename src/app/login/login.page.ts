import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(form){
    console.log("form value",form.value)
    this.authService.login(form.value).subscribe((res)=>{
      console.log("login success",res)
      this.router.navigate(["/fort-option"]);
    })
  }
  // get f() { return this.loginForm.controls; }

}
