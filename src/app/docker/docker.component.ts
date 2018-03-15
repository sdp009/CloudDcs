import { Component, OnInit } from '@angular/core';
import { XwinService } from '../xwin.service';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.css']
})
export class DockerComponent implements OnInit {

  constructor(private x11: XwinService) { }

  ngOnInit() {
  }

  startApp(){
    //this.x11.startApp({name: this.appNm, id: this.appId});
  }

}
