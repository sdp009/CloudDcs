import { Component, OnInit } from '@angular/core';
import { XwinService } from '../xwin.service';

@Component({
  selector: 'app-apptools',
  templateUrl: './apptools.component.html',
  styleUrls: ['./apptools.component.css']
})
export class ApptoolsComponent implements OnInit {

  currentApp: string;

  constructor(private x11: XwinService) { 
    this.currentApp = x11.currentApp;
  }

  ngOnInit() {
  }

}
