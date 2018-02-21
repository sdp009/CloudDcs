import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';

@Component({
  selector: 'app-x11',
  templateUrl: './x11.component.html',
  styleUrls: ['./x11.component.css']
})
export class X11Component implements OnInit {
  userQuery : any;
  titleApp: string[];
  searchParams : any;
  suggest: boolean;

  constructor(private es: ElasticsearchService) { 
    this.userQuery = '';
    this.suggest = true;
  }

  autoSugg(event){
    if(event.keyCode === 13)
      this.suggest = false;
    else
      this.suggest = true;
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

  deepSearch(_query: string){
    this.suggest = false;
    console.log("Enter key pressed!!!");
    this.userQuery = _query;
    console.log("----Search..Query:  "+ this.userQuery);
  }
  ngOnInit() {
  }

}
