import { Component, OnInit, HostBinding } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserNm : string = "";
  pass: string = "";
  type = "password";
  show = false;

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
