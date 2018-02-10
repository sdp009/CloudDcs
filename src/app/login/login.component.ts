import { Component, OnInit, HostBinding } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNm: string = "";
  pass: string = "";
  type = "password";
  show = false;

  mNode:string[] = ["pc1","pc2","pc3"];
  mName:string;

  getCredentials(){
    console.log("userNm: "+ this.userNm);
    console.log("Passwd: "+ this.pass);
    console.log("Master Node:" + this.mName);
    //    this.router.navigate(['./main']);
  }

  toggleShow()
  {
      this.show = !this.show;
      if (this.show){
          this.type = "text";
      }
      else {
          this.type = "password";
      }
  }

  constructor() { }

  ngOnInit() {
  }

}
