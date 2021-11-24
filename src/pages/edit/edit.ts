import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Score } from '../../models/score.model';
import { ScoreProvider } from '../../providers/score/score'

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  public score$: Observable<Score>;
  public inputIn: String;
  public first: any;
  public second: any;
  public an: any;
  public itemListData = [];
  constructor(private scoreProvider: ScoreProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
    this.scoreProvider.getSearch(this.itemListData, 0);
  }

  showScore(s: String) {
    console.log(s);
    this.score$ = this.scoreProvider.getOneScore(s);
    console.log(this.score$)
  }

  goUpdate(id, group, final) {
    console.log('is it work');
    this.scoreProvider.getUpdate(id, group, final);
  }

  goInsert(id, group, final) {
    console.log('is it work');
    this.scoreProvider.getInsert(id, group, final);
  }

}
