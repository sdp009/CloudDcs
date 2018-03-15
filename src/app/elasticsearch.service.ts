import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';
import { DiscoverService } from './discover.service';

@Injectable()
export class ElasticsearchService {
  private client: Client;
  
  constructor(private discov: DiscoverService) {
    if (!this.client) {
      this.connect();
    }
  }
  
  private connect() {
    var ip = this.discov.sysIp;
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

  addToIndex(value): any {
    return this.client.create(value);
  }

  appSuggestion(_queryText): any {
    return this.client.search(_queryText);
  }
}
