import {Injectable} from '@angular/core';
import {Phrases} from './phrases';

@Injectable({
  providedIn: 'root'
})
export class ResponderService {

  constructor(
    private responses: Phrases
  ) {
  }

  async startResponding(): Promise<void> {
  }
}
