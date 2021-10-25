import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {PhraseListItemComponent} from './phrase-list-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [PhraseListItemComponent],
  exports: [PhraseListItemComponent]
})
export class PhraseListItemComponentModule {
}
