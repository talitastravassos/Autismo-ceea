import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public refresher;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authFire: AngularFireAuth) {

  }

  doRefresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.authFire.authState.subscribe( data => console.log(data) );

  }

}
