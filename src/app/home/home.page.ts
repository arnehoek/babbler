import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import {ResponderService} from '../services/responder.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private responderService: ResponderService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ionViewDidEnter() {
    this.responderService.startResponding();
  }
}
