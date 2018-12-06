import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'ts-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  cityResults = [
    'Current Location',
    'Fake City, State, Country'
  ];

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this._modalCtrl.dismiss();
  }

  citySelected(item) {
    console.log(`Select city = ${item}`)
  }
}
