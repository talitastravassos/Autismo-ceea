import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../models/user';
import { LoginPage } from './../login/login';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public cadastro: AngularFireAuth) {
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async register(user: User) {
    try {
      const result = await this.cadastro.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      console.log('Usuário cadastrado com sucesso');
      this.alert('Sucesso! Usuário foi cadastrado no sistema');
    } catch (error) {      
      this.alert(error.message);
      console.log(error);
    }

    this.navCtrl.setRoot(LoginPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
