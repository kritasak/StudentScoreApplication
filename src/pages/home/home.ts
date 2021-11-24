import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about'
import { Observable } from 'rxjs';
import { Score } from '../../models/score.model';
import { ScoreProvider } from '../../providers/score/score'
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public score$: Observable<Score>;
  public inputIn: String;
  constructor(private scoreProvider: ScoreProvider, public navCtrl: NavController) {

  }

  showScore(s: String) {
    console.log(s);
    this.score$ = this.scoreProvider.getScore(s);
  }

  load() {
    this.navCtrl.push(AboutPage);
  }

  load2() {
    this.navCtrl.push(ListPage);
  }

}
