import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmaComponent } from './firma/firma.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';



@NgModule({
  declarations: [FirmaComponent,DocumentViewerComponent],
  imports: [
    CommonModule,
    SignaturePadModule
  ],
  exports:[
    FirmaComponent,
    DocumentViewerComponent
  ]
})
export class SharedModule { }
