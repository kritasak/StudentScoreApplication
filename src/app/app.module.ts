import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ScoreProvider } from '../providers/score/score';
import { HttpClientModule } from '@angular/common/http';
import { ListPage } from '../pages/list/list';
import { EditPage } from '../pages/edit/edit';
import { AnalyticPage } from '../pages/analytic/analytic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ListPage,
    EditPage,
    AnalyticPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ListPage,
    EditPage,
    AnalyticPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScoreProvider
  ]
})
export class AppModule {}
