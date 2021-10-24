import {Component} from '@angular/core';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import {tap} from 'rxjs/operators';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private textToSpeech: TextToSpeech,
    private speechRecognition: SpeechRecognition
  ) {
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available));
    this.testSpeech();
  }

  async testSpeech() {
    await this.textToSpeech.speak({text: 'Goeiemiddag Apeldoorn', locale: 'nl', rate: 1.25});
    const langs = await this.speechRecognition.getSupportedLanguages();
    console.log(langs);
    await this.speechRecognition.requestPermission();
    this.speechRecognition.startListening({showPartial: true, language: 'nl'}).pipe(tap(console.log)).subscribe();
  }
}
