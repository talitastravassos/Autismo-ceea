import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PontuacaoService } from './pontuacao.service';
import { Score } from '../../models/score';

@IonicPage()
@Component({
  selector: 'page-pontuacao',
  templateUrl: 'pontuacao.html',
  providers: [
    PontuacaoService
  ]
})


export class PontuacaoPage {

  acertos: Array<number>
  erros: Array<number>
  aproveitamento: Array<number>
  cont: number
  //i: number

  pontuacoes: Array<Score>
  pontuacoesAtuais: Array<Score>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pontuacaoService: PontuacaoService) {
  }

  /**
   * getPontuações
   */
  public getPontuacoes(): Array<Score> {

    //for (let index of this.pontuacoes) {
      this.acertos[1] = this.pontuacaoService.getAcertos(1)
      this.erros[1] = this.pontuacaoService.getAcertos(1)
      this.aproveitamento[1] = Math.round(this.pontuacaoService.getAcertos(1))
    //}

    return this.pontuacoes
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PontuacaoPage');
    this.cont = this.pontuacaoService.getContagem()
    this.getPontuacoes()
    //console.log(this.pontuacoesAtuais)
  }

}
