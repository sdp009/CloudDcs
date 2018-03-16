import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-vnc',
  templateUrl: './vnc.component.html',
  styleUrls: ['./vnc.component.css']
})
export class VncComponent implements OnInit {

  private appUrl = 'http://localhost:7119/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  startApp(ip: string){
    let sendUrl;

    sendUrl = this.appUrl + ip;
    console.log("x11VNC: "+ sendUrl);

    //sending url
    this.http.get(sendUrl).subscribe(data => {
      console.log(data);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Data is sent, No res:Server-side error.");
      }
    });
  }

}
