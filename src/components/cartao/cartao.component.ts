import { RespostaPage } from './../../pages/resposta/resposta';
import { Cartao } from './cartao.model';
import { Component, OnInit } from '@angular/core';
import { CartaoService } from './cartao.service';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'cartao',
  templateUrl: 'cartao.component.html',
  providers: [
    CartaoService
  ]
})
export class CartaoComponent implements OnInit {

  //variavel que define a imagem que vai ser mostrada
  //randomico: number = Math.floor((Math.random() * 64) + 1);
  //variavel que define qual botao vai exibir a resposta correta
  random: number = Math.floor((Math.random() * 3) + 1);
  acertos: number = 0
  erros: number = 0

  public cartao: Cartao
  public botao1: Cartao
  public botao2: Cartao
  public botao3: Cartao
  //public resposta: Cartao

  constructor(
    public navCtrl: NavController,
    private cartaoService: CartaoService,
    public alertCtrl: AlertController) {
    console.log('Hello CartaoComponent Component')
  }

  alert(message: string) {
    this.alertCtrl.create({

      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  /**
   * Função que determina as alternativas mostradas nos botões
   */
  public opcoes() {
    this.cartao = this.cartaoService.getCartaoRandom()

    if (this.random == 1) {
      this.botao1 = this.cartao;
      this.botao2 = this.cartaoService.getCartaoRandom();
      this.botao3 = this.cartaoService.getCartaoRandom();

    } else if (this.random == 2) {
      this.botao1 = this.cartaoService.getCartaoRandom();
      this.botao2 = this.cartao;
      this.botao3 = this.cartaoService.getCartaoRandom();

    } else if (this.random == 3) {
      this.botao1 = this.cartaoService.getCartaoRandom();
      this.botao2 = this.cartaoService.getCartaoRandom();
      this.botao3 = this.cartao;

    }
  }

  /**
   * Função que verifica se as respostas estao corretas e incrementa os erros e acertos
   */
  public verificarResposta(resposta: Cartao) {
    console.log(resposta)
    if(resposta == this.cartao){
      this.acertos++;
      console.log("acertos: ", this.acertos)
      this.navCtrl.push(RespostaPage, { resposta: this.cartao, acertos: this.acertos, erros: this.erros })
      //this.opcoes()

    } else {
      this.erros++;
      console.log("Erros: ", this.erros)
      this.navCtrl.push(RespostaPage, { resposta: this.cartao, acertos: this.acertos, erros: this.erros })
      //this.opcoes()
    }
  }

  /**
   * função que gerencia a rodada em andamento
   */
  public rodada() {
    for(let i = 1; i<=10; i++){
      this.opcoes()
    }
    //this.alert("Voce Terminou a Partida!")
    //this.rodada()    
  }


  ngOnInit() {

    this.opcoes()

    console.log("cartao: ", this.cartao)
    console.log("randomico: ", this.random)
  }

}
