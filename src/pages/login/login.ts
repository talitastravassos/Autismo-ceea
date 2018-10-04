import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { GooglePlus } from '@ionic-native/google-plus';
import { HomePage } from './../home/home';
import firebase from 'firebase';
import { ResetPasswordPage } from '../reset-password/reset-password';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private loginAuth: AngularFireAuth,
    private googlePlus: GooglePlus,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  alert(message: string) {
    this.alertCtrl.create({

      title: 'Hey!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async login(user: User) {

    try {
      const result = await this.loginAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      console.log('Usuário entrou no sistema com sucesso.');
      this.alert("Bem-Vindo!");
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    } catch (error) {
      this.alert(error.message);
      console.log(error);
    }

  }

  forgotPass(){
    this.navCtrl.push(ResetPasswordPage);
  }

  loginWithGoogle() {

    /* Versão Web */
    this.loginAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    // versão mobile
    /*
    this.googlePlus.login({
      'webClientId': '669230760855-eo33mvetovj47fdl2psgimit485rrja5.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        this.loginAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(suc => {
            this.alert("Sucesso! Voce entrou no sistema.");
            this.navCtrl.setRoot(HomePage);
          }).catch(err =>{
            this.alert("Erro! Usuário não entrou no sistema");
          })
      }); */
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
