import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditPhrasePage} from './edit-phrase.page';

const routes: Routes = [
  {
    path: '',
    component: EditPhrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPhraseRoutingModule {
}
