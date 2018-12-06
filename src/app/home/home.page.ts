import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationComponent } from '../shared/components/location/location.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private _modalCtrl: ModalController) {}

  openModal() {
    this._modalCtrl.create({
      // component: 'LocationComponent'   // Error: No component factory found for LocationComponent.
                                          // Did you add it to @NgModule.entryComponents?
      component: LocationComponent
    }).then(modal => modal.present());
  }
}
