import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  params: Params;

  constructor(private _route: ActivatedRoute, private _navCtrl: NavController) {
    console.log(this._route.snapshot.queryParams);
    this._route.queryParams.subscribe(qParams => {
      this.params = { ...qParams } as any;
      console.log(`Recieved ${JSON.stringify(qParams)} in FormPage`);
    });
  }

  ngOnInit() {
  }

  openPage() {
    this._navCtrl.navigateForward(['/details'], true, {
      queryParams: {
        form: 'xyz'
      }
    });
  }
}
