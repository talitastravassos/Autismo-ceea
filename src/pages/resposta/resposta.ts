import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cartao } from '../../components/cartao/cartao.model';
import { JogoPage } from '../jogo/jogo';
import { RodadaProvider } from '../../providers/rodada/rodada';
import { ResultadoPage } from '../resultado/resultado';

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
  isCorreto: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rodadaProvider: RodadaProvider) {
  }

  /**
   * isCorrect
   */
  public isCorrect(): string {
    if ((this.navParams.get("acertos")) == 1) {
      this.isCorreto = "Resposta correta!"
    } else {
      this.isCorreto = "Resposta errada!"
    }

    return this.isCorreto    
  }

  /**
   * Push na proxima pagina
   */
  public proximo() {
    let cont: number = this.rodadaProvider.getNumeroRodada()// contador da rodada para saber quando finalizar o jogo
    console.log("contador da rodada: ", cont)

    if (this.navParams.get("acertos")) {
      this.acertos++
      if (cont == 5) {
        this.navCtrl.setRoot(ResultadoPage)
      } else {
        this.navCtrl.push(JogoPage);
      }
    }
    if (this.navParams.get("erros")) {
      this.erros++
      if (cont == 5) {
        this.navCtrl.setRoot(ResultadoPage)
      } else {
        this.navCtrl.push(JogoPage);
      }
    }
  }

    ionViewDidLoad() {

      this.resposta = this.navParams.get("resposta");
    }

  }
