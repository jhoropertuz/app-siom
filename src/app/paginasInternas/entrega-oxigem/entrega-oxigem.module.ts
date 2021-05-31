import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [EntregaOxigemPage]
})
export class EntregaOxigemPageModule {}
