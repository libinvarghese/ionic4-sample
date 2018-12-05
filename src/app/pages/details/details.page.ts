import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  params: Params;

  constructor(private _route: ActivatedRoute, private _navCtrl: NavController) {
    console.log(this._route.snapshot.queryParams);
    this._route.queryParams.subscribe(qParams => {
      this.params = { ...qParams } as any;
      console.log(`Recieved ${JSON.stringify(qParams)} in DetailsPage`);
    });
  }

  ngOnInit() {
  }

  doSearch() {
    this._navCtrl.navigateBack(['/form'], true, {
      queryParams: {
        param1: 'abc'
      }
    });
  }
}
