import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    //router: any;

    userNm: string = "";
    pass: string = "";
    cpass: string;
    eMail: string;
    type: string = "password";
    show: boolean = false;
  
    mNode:string[] = ["pc1","pc2","pc3"];
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
