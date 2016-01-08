import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'uhsearch'
})

@View({
  templateUrl: 'uhsearch.html'
})

export class uhsearch {

  constructor() {
    console.info('uhsearch Component Mounted Successfully');
  }

  search(searchInput) {
    console.log(searchInput.value);
  }
}
