import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Phrase} from './phrase';

@Injectable({
  providedIn: 'root'
})
export class Phrases extends BehaviorSubject<Phrase[]> {

  constructor() {
    super([]);
  }

  findMatchingResponse(speech: string[]): string {
    for (const {question, response} of this.value) {
      for (const match of speech) {
        if (match.toLowerCase().endsWith(question.toLowerCase())) {
          return response;
        }
      }
    }
    return undefined;
  }
}
