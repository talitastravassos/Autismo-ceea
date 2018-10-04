import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { RodadaProvider } from '../../providers/rodada/rodada';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { JogoPage } from '../jogo/jogo';
import { PontuacaoPage } from '../pontuacao/pontuacao';
import { TreinoPage } from '../treino/treino';

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

  game(){
    this.rodadaProvider.resetData()
    this.navCtrl.push(JogoPage)
  }

  goToScores(){
    this.navCtrl.push(PontuacaoPage)
  }

  goToAbout(){
    this.navCtrl.push(AboutPage)
  }

  goToTraining(){
    this.navCtrl.push(TreinoPage)
  }

  logout(){
    this.authFire.auth.signOut();
    this.userDataProvider.resetConfigData();
    localStorage.clear();
    //this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    //this.authFire.authState.subscribe( data => console.log(data) );
    
  }

}
