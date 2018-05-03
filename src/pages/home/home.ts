import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login';
import { JogoPage } from '../jogo/jogo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  acertos: number
  erros: number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authFire: AngularFireAuth) {

  }

  doRefresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  jogo(){
    this.navCtrl.push(JogoPage)
  }

  logout(){
    this.authFire.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.acertos = this.navParams.get("acertos");
    this.erros = this.navParams.get("erros");

    this.authFire.authState.subscribe( data => console.log(data) );

  }

}
