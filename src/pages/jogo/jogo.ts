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
  
  ionViewDidLoad() {
    //console.log('ionViewDidLoad JogoPage');
    
    console.log("Acertos salvos no sessionStorage: ", this.rodadaProvider.getAcertos());
    console.log("Erros salvos no sessionStorage: ", this.rodadaProvider.getErros());
    console.log("Rodadas salvas no sessionStorage: ", this.rodadaProvider.getNumeroRodada());

  }
}
