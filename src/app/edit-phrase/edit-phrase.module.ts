import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {EditPhraseRoutingModule} from './edit-phrase-routing.module';
import {EditPhrasePage} from './edit-phrase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPhraseRoutingModule
  ],
  declarations: [EditPhrasePage]
})
export class EditPhraseModule {
}
