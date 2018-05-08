import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cartao } from '../../components/cartao/cartao.model';
import { JogoPage } from '../jogo/jogo';
import { RodadaProvider } from '../../providers/rodada/rodada';

@IonicPage()
@Component({
  selector: 'page-resposta',
  templateUrl: 'resposta.html',
  providers: [
    RodadaProvider
  ]
})
export class RespostaPage {

  resposta: Cartao
  acertos: number = 0
  erros: number = 0

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rodadaProvider: RodadaProvider) {
  }

  /**
   * Push na proxima pagina
   */
  public proximo() {
    
    if (this.navParams.get("acertos")) {
      this.acertos++
      this.navCtrl.push(JogoPage, { acertos: this.acertos, erros: this.erros});     
    } if (this.navParams.get("erros")) {
      this.erros++
      this.navCtrl.push(JogoPage, { acertos: this.acertos, erros: this.erros});
    }

  }

  ionViewDidLoad() {

    this.resposta = this.navParams.get("resposta");
  }

}
