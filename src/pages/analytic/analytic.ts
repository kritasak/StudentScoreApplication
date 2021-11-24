import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Score } from '../../models/score.model';
import { ScoreProvider } from '../../providers/score/score';

/**
 * Generated class for the AnalyticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analytic',
  templateUrl: 'analytic.html',
})
export class AnalyticPage {
  public an: any;
  public itemListData = [];
  public image: String;
  constructor(private scoreProvider: ScoreProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalyticPage');
    this.scoreProvider.getAnalytic(this.itemListData);
  }

  ngOnInit() {
    console.log('ngoninit()');
  }

  showJson() {
    this.an = JSON.stringify(this.itemListData);
    console.log(this.an);
    console.log(typeof this.an)
  }

  showGraph() {
    this.image = this.scoreProvider.scoreURL + "/getgraph";
  }
}
