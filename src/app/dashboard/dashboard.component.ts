import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show: boolean = true;
  router: Router;

  constructor(_router: Router) {  this.router = _router; }

  hideBullets(){
    this.show = false;
  }

  showBullets(){
    this.router.navigateByUrl('/dashboard');
    this.show = true;
  }

  ngOnInit() {
  }

}
