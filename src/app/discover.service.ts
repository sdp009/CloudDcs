import { Injectable } from '@angular/core';
//import { ElectronService } from 'ngx-electron';

@Injectable()
export class DiscoverService {

  systemNm: string;
  sysIp: string;
  userNm: string;
  userPasswd: string;
  managers = []; 

  constructor(/*private _electronService: ElectronService*/) { 
    /*this._electronService.ipcRenderer.on('managersData', (event, arg) => {
      console.log(arg);
    });*/ 

    //assigning IP of xenon
    this.sysIp = '192.168.1.120';
  }

  getManagerNames(){
    //this._electronService.ipcRenderer.send('get-managers', 'ping');
  }

}
