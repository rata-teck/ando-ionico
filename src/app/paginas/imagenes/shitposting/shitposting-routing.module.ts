import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShitpostingPage } from './shitposting.page';

const routes: Routes = [
  {
    path: '',
    component: ShitpostingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShitpostingPageRoutingModule {}
