import {Component} from '@angular/core';
import {Phrases} from '../services/phrases';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public phrases: Phrases) {
  }
}
