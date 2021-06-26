import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialRepartoPage } from './historial-reparto.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialRepartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialRepartoPageRoutingModule {}
