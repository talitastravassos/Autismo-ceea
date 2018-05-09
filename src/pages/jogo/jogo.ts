import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RodadaProvider } from '../../providers/rodada/rodada';
import { ResultadoPage } from '../resultado/resultado';


@IonicPage()
@Component({
  selector: 'page-jogo',
  templateUrl: 'jogo.html',
  providers: [
    RodadaProvider
  ]
})
export class JogoPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rodadaProvider: RodadaProvider) {
  }

  /**
   * contagemRodada
   * Dados sobre acertos e erros vindo da RespostaPage
   */
  public contagemRodada() {
    let numRodada = 1;

    if (this.navParams.get("acertos")) { //se houver acerto na rodada
      this.rodadaProvider.setAcertos(this.navParams.get("acertos"))
      this.rodadaProvider.setNumeroRodada(numRodada)
    } 
    if (this.navParams.get("erros")) { //se houver erro na rodada
      this.rodadaProvider.setErros(this.navParams.get("erros"))
      this.rodadaProvider.setNumeroRodada(numRodada)
    }

  }

  /**
   * finalizarRodada: função que finaliza a rodada e dá push na página resultado
   */
  public finalizarRodada() {
    
    if ( (this.rodadaProvider.getNumeroRodada()) == 5 )  {
      this.navCtrl.setRoot(ResultadoPage)
    }
  }

 

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JogoPage');
    //this.finalizarRodada()
    this.contagemRodada()
    
    console.log("Acertos salvos no sessionStorage: ", this.rodadaProvider.getAcertos());
    console.log("Erros salvos no sessionStorage: ", this.rodadaProvider.getErros());
    console.log("Rodadas salvas no sessionStorage: ", this.rodadaProvider.getNumeroRodada());

  }
}
