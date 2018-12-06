import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule, IonicModule
  ],
  declarations: [LocationComponent],
  exports: [LocationComponent],
  entryComponents: [LocationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
