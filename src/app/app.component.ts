/* eslint-disable @typescript-eslint/naming-convention */
import {Component} from '@angular/core';
import {Phrases} from './services/phrases';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private responses: Phrases,
  ) {
    this.responses.next([
      {question: 'Hello', response: 'Hello'},
      {question: 'What\'s your name', response: 'Michel'},
      {question: 'How are you', response: 'fine and how are you?'}
    ]);
  }

}
