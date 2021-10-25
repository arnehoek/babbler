import {Component} from '@angular/core';
import {ResponderService} from '../services/responder.service';
import {Phrases} from '../services/phrases';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public phrases: Phrases, private responderService: ResponderService) {
  }

  talk() {
    this.responderService.startResponding();
  }
}
