import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController
    //private authFire: AngularFireAuth,
    //public userDataProvider: UserdataProvider,
    //public rodadaProvider: RodadaProvider
    ) {

  }

  /* Navigation to About Page  */
  goToAbout(){
    this.navCtrl.navigateForward('/about');
  }

  /* Navigation to Training Page  */
  goToTraining(){
    this.navCtrl.navigateForward('/training');
  }

  /* Navigation to Score Page  */
  goToScores(){
    this.navCtrl.navigateForward('/score');
  }

  /* navigation to Game Page*/
  game(){
    this.navCtrl.navigateForward('/game');
  }

  

}
