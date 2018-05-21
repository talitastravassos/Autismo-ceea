import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PontuacaoService } from './pontuacao.service';

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

  pontuacoesAtuais: Array<Object>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pontuacaoService: PontuacaoService) {
  }

  /**
   * getPontuações
   */
  public getPontuacoes(n: number): Object {

    let pontuacoes = this.pontuacaoService.getPontuacao(n)
    console.log("Pontuacao recebida: ", pontuacoes)

    return pontuacoes
  }

  /*
   * getArrayPontuacoes: função que retorna um array com todas as pontuações salvas no localStorage até
   * o momento
   */
  public getArrayPontuacoes(): Array<Object> {
    let arrayPontuacoes = []

    for (let index = 1; index <= this.cont; index++) {
      let obj = this.pontuacaoService.getPontuacao(index)
      arrayPontuacoes.push(obj)
    }

    //console.log("Array de objetos recebido: ", arrayPontuacoes)

    return arrayPontuacoes
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PontuacaoPage');
    this.cont = this.pontuacaoService.getContagem()

    this.pontuacoesAtuais = this.getArrayPontuacoes()
    console.log("Pontuações Atuais: ", this.pontuacoesAtuais)
  }

}
