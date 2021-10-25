import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Responses extends BehaviorSubject<{ [question: string]: string }> {

  constructor() {
    super({});
  }

  findMatchingResponse(phrases: string[]): string {
    for (const [key, answer] of Object.entries(this.value)) {
      for (const phrase of phrases) {
        if (phrase.toLowerCase().endsWith(key.toLowerCase())) {
          return answer;
        }
      }
    }
    return undefined;
  }
}
