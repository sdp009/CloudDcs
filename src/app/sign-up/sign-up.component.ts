import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    //router: any;
    router: Router;
    
    userNm: string = "";
    pass: string = "";
    cpass: string;
    eMail: string;
    type: string = "password";
    show: boolean = false;
  
    mNode:string[] = ["xenon","nipun","admin"];
    mName:string;
  
    getCredentials(){
        if(!(this.cpass === this.pass)){
            alert("Password confirmation failed");
        }
      console.log("userNm: "+ this.userNm);
      console.log("Passwd: "+ this.pass);
      console.log("email: "+ this.eMail);
      console.log("Master Node:" + this.mName);
      //this.router.navigate(['./main']);
      if(this.userNm!='undefined' && this.pass!='undefined')
        this.router.navigateByUrl('/welcome');      
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
  
  constructor(_router: Router) { this.router = _router; }

  ngOnInit() {
  }

}
