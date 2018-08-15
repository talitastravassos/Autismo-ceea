import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from './../home/home';
import firebase from '../../../node_modules/firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private loginAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  alert(message: string) {
    this.alertCtrl.create({

      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async login(user: User) {
    try {
      const result = await this.loginAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      console.log('Usuário entrou no sistema com sucesso.');
      this.alert("Sucesso! Voce entrou no sistema.");
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    } catch (error) {
      this.alert(error.message);
      console.log(error);
    }

    
  }

  loginWithGoogle() {
    this.loginAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
