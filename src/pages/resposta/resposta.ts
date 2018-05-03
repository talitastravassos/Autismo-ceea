import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cartao } from '../../components/cartao/cartao.model';
import { JogoPage } from '../jogo/jogo';

/**
 * Generated class for the RespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resposta',
  templateUrl: 'resposta.html',
})
export class RespostaPage {

  resposta: Cartao
  acertos: number
  erros: number

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  /**
   * Push na proxima pagina
   */
  public proximo() {
    this.navCtrl.push(JogoPage, { acertos: this.acertos, erros: this.erros })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespostaPage');

    this.resposta = this.navParams.get("resposta");
    this.acertos = this.navParams.get("acertos");
    this.erros = this.navParams.get("erros");
  }

}
