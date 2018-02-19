import { Component, OnInit } from '@angular/core';
import { Client } from 'elasticsearch';
//var cors = require('cors');
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  
  userQuery : any;
  titleApp: string[];
  searchParams;
  private client: Client;

  constructor() { 
    if (!this.client) {
      this.connect();
      console.log("Establishing connectiom$$$")
    }
    this.titleApp;
  }

  private connect() {
    var ip = '127.0.0.1';
    var uname = 'elastic:+qvypIAxqaAn-Jw2MO?O';
    this.client = new Client({
      host: [
        {
          host: ip,
          auth: uname,
          protocol: 'http',
          port: 9200
        }
      ],
      log: 'trace'
    });
  }


  autoSugg(){
    var pageNum = 1/*request.params.page*/;
    var perPage = 5/*request.params.per_page*/;
    console.log("----Query:  "+ this.userQuery);
    this.connect();
    //app.use(cors()) // Use this after the variable declaration
    this.searchParams = {
      index: 'cloudadv',
      type: 'X11',
      from: (pageNum - 1) * perPage,
      size: perPage,
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
    console.log("lenght " + this.titleApp.length);
    //calling

    this.client.search(this.searchParams, function (err: any, res: any) :void {
      if (err) {
        // handle error
        console.log("Connection error!!!!!!!!")
        throw err;
      }
      this.titleApp.length = 0;
      console.log(`found ${res.hits.total} items in ${res.took}ms`);
      console.log(`returned article titles:`);
      res.hits.hits.forEach(
        function(hit, index){
      console.log(`${hit._source.title} :  ${hit._source.exec}`);
      this.titleApp.push( hit._source.title );
        });
    
      console.log("titleApp results: ");
        this.titleApp.forEach(
           (name, index) => console.log(name, index));
    });
  }

  ngOnInit() {
  }

}
