import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendiasPageRoutingModule } from './vendias-routing.module';

import { VendiasPage } from './vendias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendiasPageRoutingModule
  ],
  declarations: [VendiasPage]
})
export class VendiasPageModule {}
