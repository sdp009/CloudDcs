import { Component } from '@angular/core';
//import { remote, ipcRenderer } from 'electron';
declare const window: any;
const ipcRenderer = window.require('electron').ipcRenderer;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
    //ipcRenderer.send('Opengoogle');
    ipcRenderer.send('async', 1);

    ipcRenderer.on('async-reply', (event, arg) => {  
      // Print 2
      console.log(arg);
      // Send sync message to main process
      let mainValue = ipcRenderer.sendSync('sync', 3);
      // Print 4
      console.log(mainValue);
    });
  
  }
}
