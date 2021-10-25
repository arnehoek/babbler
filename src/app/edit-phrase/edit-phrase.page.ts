import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Phrase} from '../services/phrase';
import {Phrases} from '../services/phrases';

@Component({
  selector: 'app-edit-phrase',
  templateUrl: './edit-phrase.page.html',
  styleUrls: ['./edit-phrase.page.scss'],
})
export class EditPhrasePage implements OnInit {

  public phrase: Phrase;
  private id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private phrases: Phrases
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('question');
    this.phrase = this.phrases.value.find(({question}) => question === this.id);
  }
}
