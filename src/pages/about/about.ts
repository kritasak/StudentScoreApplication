import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { EditPage } from '../edit/edit'
import { AnalyticPage } from '../analytic/analytic'
import { Observable } from 'rxjs';
import { Score } from '../../models/score.model';
import { ScoreProvider } from '../../providers/score/score'

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public score$: Observable<Score>;
  public inputIn: String;
  constructor(private scoreProvider: ScoreProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  showScore(s: String) {
    console.log(s);
    this.score$ = this.scoreProvider.getScore(s);
  }

  load1() {
    this.navCtrl.push(ListPage);
  }
  load2() {
    this.navCtrl.push(EditPage);
  }
  load3() {
    this.navCtrl.push(AnalyticPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
