import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';
//var cors = require('cors');
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  
  userQuery : any;
  titleApp: string[];
  searchParams : any;

  constructor(private es: ElasticsearchService) { 
    this.userQuery = '';
  }

  autoSugg(){
    var pageNum = 1/*request.params.page*/;
    var perPage = 5/*request.params.per_page*/;
    console.log("----Query:  "+ this.userQuery);
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

  ngOnInit() {
  }

}
