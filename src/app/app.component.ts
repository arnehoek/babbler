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
      {question: 'How are you', response: 'fine and how are you?'},
      {question: 'What is the greatest city on earth', response: 'Apeldoorn'},
      {
        question: 'What is this presentation about', response:
          'This is a presentation about ionic. It is a hybrid app platform and it is awesome. But I say that because I am written in it.'
      }
    ]);
  }

}
