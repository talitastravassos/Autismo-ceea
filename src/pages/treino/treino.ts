import { Cartao } from './../../components/cartao/cartao.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaoService } from '../../components/cartao/cartao.service';

@IonicPage()
@Component({
  selector: 'page-treino',
  templateUrl: 'treino.html',
  providers: [CartaoService] 
})
export class TreinoPage {

  public cartoes: Array<Cartao>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cartaoService: CartaoService) {
  }

  getCartaos(){
    this.cartoes = this.cartaoService.getCartao()
    console.log(this.cartoes)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinoPage');

    this.getCartaos()
  }

}
