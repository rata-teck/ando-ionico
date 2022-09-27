import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunasPage } from './funas.page';

const routes: Routes = [
  {
    path: '',
    component: FunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunasPageRoutingModule {}
