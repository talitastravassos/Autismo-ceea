import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { JogoPage } from '../jogo/jogo';
import { RodadaProvider } from '../../providers/rodada/rodada';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { PontuacaoPage } from '../pontuacao/pontuacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    RodadaProvider,
    UserdataProvider
  ]
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authFire: AngularFireAuth,
    public userDataProvider: UserdataProvider,
    public rodadaProvider: RodadaProvider) {

  }

  doRefresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  jogo(){
    this.rodadaProvider.resetData()
    this.navCtrl.push(JogoPage)
  }

  goToScores(){
    this.navCtrl.push(PontuacaoPage)
  }

  goToAbout(){
    this.navCtrl.push(AboutPage)
  }

  logout(){
    this.authFire.auth.signOut();
    this.userDataProvider.resetConfigData();
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');

    this.authFire.authState.subscribe( data => console.log(data) );

  }

}
