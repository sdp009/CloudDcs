import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElasticsearchService } from '../elasticsearch.service';
import { XwinService } from '../xwin.service';

@Component({
  selector: 'app-x11',
  templateUrl: './x11.component.html',
  styleUrls: ['./x11.component.css']
})
export class X11Component implements OnInit {
  userQuery : any;
  titleApp: string[];
  appInfo: string[];
  searchParams : any;
  deepSearchParams : any;
  suggest: boolean;

  exec: string;
  modifyExec: string;
  argReq: boolean;
  cmdArg: string;
  appNm: string;
  appType: String;

  private appUrl = 'http://localhost:7009/';
  data: any = {};
  appId: number;

  systemNm: string;
  sysIp: string;
  userNm: string;
  userPasswd: string;

  constructor(private es: ElasticsearchService, private x11: XwinService,
    private http: HttpClient) { 
    this.userQuery = '';
    this.suggest = true;
    this.argReq = false;
    this.cmdArg = '';

    this.sysIp = '192.168.1.102';
    this.userNm = 'shaun';
    this.userPasswd = '250331';
  }

  autoSugg(event){
    if(event.keyCode === 13)
      this.suggest = false;
    else
      this.suggest = true;
    
    var pageNum = 1/*request.params.page*/;
    var perPage = 5/*request.params.per_page*/;
    console.log("----QueryK:  "+ this.userQuery);

    //app.use(cors()) // Use this after the variable declaration
    this.searchParams = {
      index: 'cloudadv',
      type: 'X11',
      from: (pageNum - 1) * perPage,
      size: perPage,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body:{
        query:{
          multi_match: {
            query: this.userQuery,
            fuzziness: 2,
            fields: ["title","title.ngrams","title.stemmed","title.title"],
            minimum_should_match: "70%"
            }
        }
      },
      _source: ['title', 'exec']
    };

    //calling
    this.es.appSuggestion(this.searchParams).then(
      response => {
        this.titleApp = response.hits.hits;
        console.log(this.titleApp);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('Search Completed!');
      });  
  }

  deepSearch(_query: string){
    this.suggest = false;
    console.log("Enter key pressed!!!");
    this.userQuery = _query;
    console.log("----Search..Query:  "+ this.userQuery);

    //deep query
    var pageNum = 1/*request.params.page*/;
    var perPage = 10/*request.params.per_page*/;
    var wildQuery = "*" + this.userQuery + "*";
    console.log("----QueryK:  "+ this.userQuery);
    //app.use(cors()) // Use this after the variable declaration
    this.deepSearchParams = {
      index: 'cloudadv',
      type: 'X11',
      from: (pageNum - 1) * perPage,
      size: perPage,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body:{
        query:{
          bool : {
          must_not : {
                query_string: {
                    default_field: "systemNm",
                    query: "abc"
                }
          },
          should : [
            {
              multi_match: {
          
                query: this.userQuery,
                fuzziness: 2,
                fields: ["title","title.ngrams","title.stemmed","title.title","title.aggre"],
                minimum_should_match: "70%"
              }
            },
            { 
              match: {
                comment: this.userQuery
              }
            },
            { 
                match: {
                  description: this.userQuery
                }
            },
            {
              wildcard: {
                title: {
                  value: wildQuery
                }
              }
            },
            {
              wildcard: {
                exec: {
                  value: wildQuery
                }
              }
            }
          ]
        }//bool    
       }//query
      }//body
    };//searchparms

    //calling
    this.es.appSuggestion(this.deepSearchParams).then(
      response => {
        this.appInfo = response.hits.hits;
        console.log(this.appInfo);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('DeepSearch Completed!');
      });
  }//deepSearch close

  //modal display attrib
  launchApp(appRes: any){
    this.appNm = appRes._source.title;
    this.exec = appRes._source.exec;
    this.appType = new String(appRes._source.terminal);

    if(this.appType != "true")
      this.appType = "GUI Application";
    else
      this.appType = "Command Line App";  
    console.log("type: "+this.appType);
      
    if(this.exec.includes("%") || this.exec.indexOf("%")>0){
      console.log("Args found");
      this.argReq = true;
      this.modifyExec = this.exec.substring(0,this.exec.indexOf("%"));
    }  
    else
      this.argReq= false;
    
  }//launchApp close

  //file chooser
  change(event:any) {
    console.log(event.target.files);
    this.cmdArg = ''; 
    for (var i = 0; i < event.target.files.length; i++) { 
      var file = event.target.files[i];
      //console.log(file.name);
      this.modifyExec += " " + file.name;
      this.cmdArg += " " + file.name + " ";
    }
  }

  argAppend(event : any){
    this.modifyExec = this.exec.substring(0,this.exec.indexOf("%"));
    this.modifyExec += event.target.value;
  }

  startApp(){
    //this.x11.startApp(this.modifyExec);
    let sendUrl;
    console.log("before launching : appType: "+ this.appType);
    if(this.appType != "Command Line App"){
      if(this.argReq)
        sendUrl = this.appUrl + this.modifyExec;
      else
        sendUrl = this.appUrl + this.exec;
    }
    else{
      if(this.argReq)
        sendUrl = this.appUrl+ "xterm -hold -e \"" + this.modifyExec + "\"";
      else
        sendUrl = this.appUrl+ "xterm -hold -e \"" + this.exec + "\"";
    }
    console.log("method called: execUrl = "+ sendUrl);
    
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
    this.x11.startApp({name: this.appNm, id: this.appId});
    this.appId++;
  }

  ngOnInit() {
  }

}
