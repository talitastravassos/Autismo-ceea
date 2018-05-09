import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login';
import { JogoPage } from '../jogo/jogo';
import { RodadaProvider } from '../../providers/rodada/rodada';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    RodadaProvider
  ]
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authFire: AngularFireAuth,
    public rodadaProvider: RodadaProvider) {

  }

  doRefresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  jogo(){
    this.rodadaProvider.resetData()
    this.navCtrl.push(JogoPage)
  }

  logout(){
    this.authFire.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');

    this.authFire.authState.subscribe( data => console.log(data) );

  }

}
