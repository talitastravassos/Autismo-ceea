import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UserdataProvider } from '../providers/userdata/userdata';

@Component({
  templateUrl: 'app.html',
  providers: [
    UserdataProvider
  ]
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userDataProvider: UserdataProvider) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = userDataProvider.getConfigData();
      if (config == null){
        this.rootPage = LoginPage;
        userDataProvider.setConfigData(false);
      } else {
        this.rootPage = HomePage;
      }
      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
