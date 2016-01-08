import {ComponentMetadata as Component, ViewMetadata as View, NgZone} from 'angular2/angular2';

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
    this.searchList.push({ title: searchInput.value })
  }
}
