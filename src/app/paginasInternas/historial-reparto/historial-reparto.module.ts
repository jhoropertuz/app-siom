import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialRepartoPageRoutingModule } from './historial-reparto-routing.module';

import { HistorialRepartoPage } from './historial-reparto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialRepartoPageRoutingModule
  ],
  declarations: [HistorialRepartoPage]
})
export class HistorialRepartoPageModule {}
