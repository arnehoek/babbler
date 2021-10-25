import {Injectable} from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import {Responses} from './responses';

@Injectable({
  providedIn: 'root'
})
export class ResponderService {

  constructor(
    private textToSpeech: TextToSpeech,
    private speechRecognition: SpeechRecognition,
    private responses: Responses
  ) {
  }

  async startResponding(): Promise<void> {
    await this.speechRecognition.requestPermission();
    this.speechRecognition.startListening({language: 'en-US'}).subscribe(async phrases => {
      const response = this.responses.findMatchingResponse(phrases);
      if (response) {
        await this.textToSpeech.speak(response);
      }
      this.startResponding();
    });
  }
}
