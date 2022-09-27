import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunasPageRoutingModule } from './funas-routing.module';

import { FunasPage } from './funas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunasPageRoutingModule
  ],
  declarations: [FunasPage]
})
export class FunasPageModule {}
