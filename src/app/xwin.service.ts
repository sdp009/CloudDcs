import { Injectable } from '@angular/core';
//import SSH2Promise = require('ssh2-promise');
//import { launchApp } from '../../node_modules/x11/dist/x11';
//import '../../x11';
//import * as xJS from '../../node_modules/x11/dist/x11';
//declare var System: any; 

@Injectable()
export class XwinService {

  systemNm: string;
  sysIp: string;
  userNm: string;
  userPasswd: string;
  appsList = [];
  currentApp: string;

  constructor() { 
    this.sysIp = '192.168.1.102';
    this.userNm = 'shaun';
  }

  startApp(appNm : any){
    //console.log(xJS.launchApp(this.sysIp, this.userNm, this.userPasswd, appExec));
  
    /*System.import('../../x11.js')
        .then(xJS => {
          xJS.launchApp(this.sysIp, this.userNm, this.userPasswd, appExec)
    });*/
    this.appsList.unshift(appNm);
    console.log("From x11 service: " + this.appsList.length);
  } 
  
  stopApp(){

  }
}
