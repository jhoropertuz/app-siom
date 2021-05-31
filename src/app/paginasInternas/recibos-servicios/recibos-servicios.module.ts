import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibosServiciosPageRoutingModule } from './recibos-servicios-routing.module';

import { RecibosServiciosPage } from './recibos-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibosServiciosPageRoutingModule
  ],
  declarations: [RecibosServiciosPage]
})
export class RecibosServiciosPageModule {}
