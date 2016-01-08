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
    // this.searchList = [
    //   { title: 'eka',  description: 'ekan selska' },
    //   { title: 'toka', description: 'tokan selska' },
    //   { title: 'koka', description: 'kokan selska' }
    // ];
  }

  search(searchInput) {
    //this.searchList.push({ title: searchInput.value })
    this.http.get('/api/search/'+searchInput.value)
     // Call map on the response observable to get the parsed people object
     .map(res => res.json())
     // Subscribe to the observable to get the parsed people object and attach it to the
     // component
     .subscribe(res => {
       this.searchResults = JSON.parse(res).data.items
     });
  }
}
