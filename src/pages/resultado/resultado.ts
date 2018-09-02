import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RodadaProvider } from '../../providers/rodada/rodada';
import { HomePage } from '../home/home';
import { PontuacaoService } from '../pontuacao/pontuacao.service';

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
  providers: [
    RodadaProvider,
    PontuacaoService
  ]
})
export class ResultadoPage {

  acertos: number
  erros: number
  numeroRodadas: number
  aproveitamento: number

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rodadaProvider: RodadaProvider,
    public pontuacaoService: PontuacaoService) {

  }

  /**
   * resetRodada: função que reseta os dados da rodada atual salvos no sessionStorage 
   * para iniciar um novo jogo.
   */
  public resetRodada() {
    this.rodadaProvider.resetData()
    this.navCtrl.setRoot(HomePage)
  }

  /**
   * aproveitamento
   */
  public aproveitamentoRodada(): number {
    this.aproveitamento = (this.acertos/10) * 100;

    return Math.round(this.aproveitamento)    
  }

  /**
   * pontuacaoData
   */
  public pontuacaoData() {
    this.pontuacaoService.contagem(1)
    this.pontuacaoService.setPontuação( this.acertos, this.erros, this.aproveitamento) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
    this.acertos = this.rodadaProvider.getAcertos()
    this.erros = this.rodadaProvider.getErros()
    this.aproveitamentoRodada()
    this.pontuacaoData()

    //console.log(this.pontuacaoService.getAcertos(1))
  }

}
