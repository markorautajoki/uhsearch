import {ComponentMetadata as Component, ViewMetadata as View, NgZone} from 'angular2/angular2';

import {Http, HTTP_PROVIDERS} from 'lib/http';


@Component({
  selector: 'uhsearch'
})

@View({
  templateUrl: 'uhsearch.html'
})

export class uhsearch {

  constructor() {
    console.info('uhsearch Component Mounted Successfully');
    this.searchList = [
      { title: 'eka',  description: 'ekan selska' },
      { title: 'toka', description: 'tokan selska' },
      { title: 'koka', description: 'kokan selska' }
    ];
  }

  search(searchInput) {
    //this.searchList.push({ title: searchInput.value })
    Http.get('/api/search/'+searchInput.value)
     // Call map on the response observable to get the parsed people object
     .map(res => res.json())
     // Subscribe to the observable to get the parsed people object and attach it to the
     // component
     .subscribe(res => this.searchResults = res.data.items);
  }
}
