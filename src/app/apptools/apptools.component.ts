import { Component, OnInit } from '@angular/core';
import { XwinService } from '../xwin.service';
import { ElasticsearchService } from '../elasticsearch.service';

@Component({
  selector: 'app-apptools',
  templateUrl: './apptools.component.html',
  styleUrls: ['./apptools.component.css']
})
export class ApptoolsComponent implements OnInit {

  currentApp: string;

  exec: string;
  modifyExec: string;
  argReq: boolean;
  cmdArg: string;
  appNm: string;
  appType: String;

  constructor(private x11: XwinService, private es: ElasticsearchService) { 
    this.currentApp = x11.currentApp;

  }

  ngOnInit() {
  }

}
