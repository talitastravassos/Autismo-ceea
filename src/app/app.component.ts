import { Component } from '@angular/core';
import { Platform, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserdataProvider } from '../providers/userdata/userdata';
import { RodadaProvider } from '../providers/rodada/rodada';

import { HomePage } from './../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';


@Component({
  templateUrl: 'app.html',
  providers: [
    UserdataProvider,
    RodadaProvider
  ]
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userDataProvider: UserdataProvider,
    private authFire: AngularFireAuth) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      /* Verifica se o usuario estar logado e o redireciona para a HomePage ou LoginPage */
      this.authFire.authState.subscribe( (data) => {
        if(data == null){
          this.rootPage = LoginPage;
        } else {
          this.rootPage = HomePage;
          console.log(data)
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
