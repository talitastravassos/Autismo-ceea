import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  resetPassword(email: string){
    var auth = firebase.auth();
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Email de recuperação enviado com sucesso! Verifique o seu Email.',
      duration: 2000,
      showBackdrop: true,
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.push(LoginPage);
    }, 2500);
  return auth.sendPasswordResetEmail(email)
  .then(() => console.log('Email sent.'))
  .catch((error) => console.log(error))  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
