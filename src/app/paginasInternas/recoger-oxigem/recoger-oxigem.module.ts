import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecogerOxigemPageRoutingModule } from './recoger-oxigem-routing.module';

import { RecogerOxigemPage } from './recoger-oxigem.page';
import { SharedModule } from 'src/app/shareds/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecogerOxigemPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [RecogerOxigemPage],
  providers:[
    
  ]
})
export class RecogerOxigemPageModule {}
