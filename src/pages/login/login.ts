import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from './../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private loginAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  async login(user: User) {
    try {
      const result = await this.loginAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      console.log('Usuário entrou no sistema com sucesso.');
      if(result){
        this.navCtrl.push(HomePage);
      }
    } catch (e) {
      console.log(e);
    }
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
