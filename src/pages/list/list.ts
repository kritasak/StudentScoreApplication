import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Score } from '../../models/score.model';
import { ScoreProvider } from '../../providers/score/score'

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public score$: Observable<Score>;
  public inputIn: String;
  public itemListData = [];
  constructor(private scoreProvider: ScoreProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.scoreProvider.refresh();
    this.scoreProvider.getData1(this.itemListData);
  }

  doInfinite(event) {
    console.log('doInList.ts');
    this.scoreProvider.getData2(this.itemListData, event);
  }

  showScore(s: String) {
    console.log(s);
    this.score$ = this.scoreProvider.getScore(s);
  }

}
