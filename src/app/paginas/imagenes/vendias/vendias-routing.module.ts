import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendiasPage } from './vendias.page';

const routes: Routes = [
  {
    path: '',
    component: VendiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendiasPageRoutingModule {}
