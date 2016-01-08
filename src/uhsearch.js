import {ComponentMetadata as Component, ViewMetadata as View, NgZone} from 'angular2/angular2';

import {Http, HTTP_PROVIDERS} from "angular2/http";


@Component({
  selector: 'uhsearch',
  viewProviders: [HTTP_PROVIDERS]
})

@View({
  templateUrl: 'uhsearch.html'
})

export class uhsearch {

  constructor(http: Http) {
    console.info('uhsearch Component Mounted Successfully');
    this.http = http;
  }

  search(searchInput) {
    this.http.get('/api/search/'+searchInput.value)
     .map(res => JSON.parse(res.json()))
     .subscribe(res => {
       this.searchResults = res.data.items
     });
  }
}
