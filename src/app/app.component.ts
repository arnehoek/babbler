import {Component} from '@angular/core';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private speechRecognition: SpeechRecognition) {
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available));
    this.testSpeech();
  }

  async testSpeech() {
    const langs = await this.speechRecognition.getSupportedLanguages();
    console.log(langs);
    await this.speechRecognition.requestPermission();
    this.speechRecognition.startListening({showPartial: true, language: 'nl∂'}).pipe(tap(console.log)).subscribe();
  }
}
