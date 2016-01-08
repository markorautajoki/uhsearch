import {Component, View, bootstrap} from 'angular2/angular2';
import {Ng2Sandbox} from 'ng-2-sandbox';

@Component({
  selector: 'main'
})

@View({
  directives: [Ng2Sandbox],
  template: `
    <ng-2-sandbox></ng-2-sandbox>
  `
})

class Main {

}

bootstrap(Main);
