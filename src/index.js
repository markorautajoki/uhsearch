import {Component, View, bootstrap} from 'angular2/angular2';
import {uhsearch} from 'uhsearch';

@Component({
  selector: 'main'
})

@View({
  directives: [uhsearch],
  template: `
    <uhsearch></uhsearch>
  `
})

class Main {

}

bootstrap(Main);
