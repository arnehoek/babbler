import {Component, Input} from '@angular/core';
import {Phrase} from '../../services/phrase';

@Component({
  selector: 'app-phrase-list-item',
  templateUrl: './phrase-list-item.component.html',
  styleUrls: ['./phrase-list-item.component.scss'],
})
export class PhraseListItemComponent {
  @Input() phrase: Phrase;

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
