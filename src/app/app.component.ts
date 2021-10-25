/* eslint-disable @typescript-eslint/naming-convention */
import {Component} from '@angular/core';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import {tap} from 'rxjs/operators';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import {Responses} from './services/responses';
import {ResponderService} from './services/responder.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private responses: Responses,
    private responderService: ResponderService
  ) {
    this.responses.next({
      Hello: 'Hello',
      'What\'s your name': 'Michel',
      'How are you': 'fine and how are you?'
    });
  }

}
