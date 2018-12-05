import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  private urls = [
    '/form'
  ];
  public params;
  public items: Array<{ title: string; note: string; icon: string, url: string }> = [];
  constructor(private _route: ActivatedRoute, private _navCtrl: NavController) {
    this._route.queryParams.subscribe(qParams => {
      this.params = { ...qParams } as any;
      console.log(`Recieved ${JSON.stringify(qParams)} in ListPage`);
    });
  }

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[i],
        url: this.urls[i] ? this.urls[i] : null
      });
    }
  }

  openPage(item) {
    if (item.url) {
      this._navCtrl.navigateForward(item.url, true, {
        queryParams: {
          test: '123'
        }
      });
    }
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
