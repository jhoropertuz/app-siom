import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregaOxigemPageRoutingModule } from './entrega-oxigem-routing.module';

import { EntregaOxigemPage } from './entrega-oxigem.page';
import { SharedModule } from 'src/app/shareds/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaOxigemPageRoutingModule,
    SharedModule
  ],
  declarations: [EntregaOxigemPage]
})
export class EntregaOxigemPageModule {}
