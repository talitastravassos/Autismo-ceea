import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { AngularFireAuth } from 'angularfire2/auth'

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
    public cadastro: AngularFireAuth) {
  }

  async register(user: User) {
    try {
      const result = await this.cadastro.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      console.log('Usuário cadastrado com sucesso');
    } catch (e) {
      console.log(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
