import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XwinService } from '../xwin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show: boolean = true;
  router: Router;
  appList= [];

  constructor(_router: Router, private x11: XwinService) 
  {  this.router = _router;
     this.appList = x11.appsList;
  }

  hideBullets(nm){
    this.show = false;
    this.appList = this.x11.appsList;
    this.x11.currentApp = nm;
  }

  showBullets(){
    this.router.navigateByUrl('/dashboard');
    this.show = true;
  }

  ngOnInit() {
  }

}
