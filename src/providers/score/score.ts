import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from '../../models/score.model'

/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScoreProvider {
  public scoreURL = "http://5d82f636089b.ngrok.io";
  theLast = 0;
  constructor(public http: HttpClient) {
    console.log('Hello ScoreProvider Provider');
  }

  getScore(id: String) {
    console.log(this.scoreURL + "/findscore?id=" + id);
    return this.http.get<Score>(this.scoreURL + "/findscore?id=" + id);
  }

  getOneScore(id: String) {
    console.log(this.scoreURL + "/findonescore?id=" + id);
    return this.http.get<Score>(this.scoreURL + "/findonescore?id=" + id);
  }

  getSearch = (itemList, query) => {
    console.log("Query is: " + query)
    this.http
      .get(this.scoreURL + "/findscore?id=" + query)
      .subscribe((data: any) => {
        console.log(data)
        console.log(data['data'].length)
        console.log(data['data'])
        console.log(typeof data['data'])
        for(let i = 0; i < data.data.length;i++) {
          itemList.push(data.data[i]);
        }
      });
  };

  getUpdate = (id, group, final) => {
    console.log(this.scoreURL + "/updatescore?id=" + id + "&group=" + group + "&final=" + final);
    this.http.get(this.scoreURL + "/updatescore?id=" + id + "&group=" + group + "&final=" + final).subscribe((data: any) => {
      if(data.status = 200) {
        data.dismiss();
      }
    });
  };

  getInsert = (id, group, final) => {
    console.log(this.scoreURL + "/insertscore?id=" + id + "&group=" + group + "&final=" + final);
    this.http.get(this.scoreURL + "/insertscore?id=" + id + "&group=" + group + "&final=" + final).subscribe((data: any) => {
      if(data.status = 200) {
        data.dismiss();
      }
    });
  };

  getAnalytic = (itemList) => {
    console.log("getAnalytic")
    this.http
      .get(this.scoreURL + "/analytic")
      .subscribe((analytic: any) => {
        console.log(analytic)
        console.log(analytic['analytic'].length)
        console.log(analytic['analytic'])
        console.log(typeof analytic['analytic'])
        itemList.push(analytic.analytic[0]);
      });
  };

  getData1(itemList) {
    console.log("I will get the data");
    this.http.get(this.scoreURL + '/find20score?id=' + this.theLast).subscribe((data: any) => {
      for(let i = 0; i < data.data.length;i++) {
        itemList.push(data.data[i]);
        this.theLast = data.data[19]["id"];
      }
    });
  }

  getData2(itemList, event) {
    console.log("I will get the data");
    this.http.get(this.scoreURL + '/find20score?id=' + this.theLast).subscribe((data: any) => {
      for(let i = 0; i < data.data.length;i++) {
        itemList.push(data.data[i]);
        this.theLast = data.data[data.data.length - 1]["id"];
      }
      if(data.data.lenght !== 20) {
        event.complete()
      }
    });
  }

  refresh() {
    console.log('refresh');
    this.theLast = 0;
  }

}
