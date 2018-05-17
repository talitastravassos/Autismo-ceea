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
  pontuacaoObj_1: any
  pontuacaoObj_2: any
  pontuacaoObj_3: any
  pontuacaoObj_4: any

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
   * getArrayPontuacoes
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

    this.pontuacaoObj_1 = this.pontuacaoService.getPontuacao(1)
    this.pontuacaoObj_2 = this.pontuacaoService.getPontuacao(2)
    this.pontuacaoObj_3 = this.pontuacaoService.getPontuacao(3)
    this.pontuacaoObj_4 = this.pontuacaoService.getPontuacao(4)

    this.pontuacoesAtuais = this.getArrayPontuacoes()
    console.log("Pontuações Atuais: ", this.pontuacoesAtuais)
  }

}
