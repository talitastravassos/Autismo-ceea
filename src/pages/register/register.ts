import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import firebase from 'firebase';
import { User } from '../../models/user';
import { LoginPage } from './../login/login';
import { UserdataProvider } from '../../providers/userdata/userdata';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [
    UserdataProvider
  ]
})
export class RegisterPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private authFire: AngularFireAuth,
    public userDataProvider: UserdataProvider) {
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Hey!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  logout(){
    this.authFire.auth.signOut();
    this.userDataProvider.resetConfigData();
    localStorage.clear();
    //this.navCtrl.setRoot(LoginPage);
  }

  emailVerification(){

    var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        console.log('email verification sent.');
      }).catch(function(error) {
        console.log(error);
      });


      this.logout();
  }

  async register(user: User) {  

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(() => {
      this.emailVerification();
      //this.logout();
      console.log('Usuário cadastrado com sucesso');
      this.alert('Sucesso! Usuário foi cadastrado no app Autismo - CEEA.');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      this.alert(error.message);
      console.log(errorCode, errorMessage);
    });
    
  }

  public login(){
    this.navCtrl.setRoot(LoginPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
