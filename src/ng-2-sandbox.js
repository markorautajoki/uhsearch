import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'ng-2-sandbox'
})

@View({
  templateUrl: 'ng-2-sandbox.html'
})

export class Ng2Sandbox {

  constructor() {
    console.info('Ng2Sandbox Component Mounted Successfully');
  }

}
