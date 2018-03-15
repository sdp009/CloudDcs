import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverService } from '../discover.service';

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
  router: Router;

  mNode:string[] = ["xenon","nipun","admin"];
  mName:string;
  mIp:string;

  constructor(_router: Router, private discov: DiscoverService) { this.router = _router; }


  getCredentials(){
    console.log("userNm: "+ this.userNm);
    this.discov.userNm = this.userNm;
    console.log("Passwd: "+ this.pass);
    this.discov.userPasswd = this.pass;
    console.log("Master Node:" + this.mName);
    this.discov.systemNm = this.mName;

    //    check credentials and route
    if(this.userNm === 'shaun' && this.pass === '250331'){
      this.router.navigateByUrl('/dashboard');      
    }  
    else
      alert("Invalid credentials");
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
  ngOnInit() {
  }

}
