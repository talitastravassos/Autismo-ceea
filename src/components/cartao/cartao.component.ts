import { Cartao } from './cartao.model';
import { Component, OnInit } from '@angular/core';
import { CartaoService } from './cartao.service';

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

  public cartao: Cartao
  public botao1: Cartao
  public botao2: Cartao
  public botao3: Cartao

  constructor(private cartaoService: CartaoService) {
    console.log('Hello CartaoComponent Component')    
  }

  /**
   * Função que determina as alternativas mostradas nos botões
   */
  public opcoes() {
    this.cartao = this.cartaoService.getCartaoRandom()

    if(this.random == 1){
      this.botao1 = this.cartao;
      this.botao2 = this.cartaoService.getCartaoRandom();
      this.botao3 = this.cartaoService.getCartaoRandom();  

    } else if(this.random == 2){
      this.botao1 = this.cartaoService.getCartaoRandom();
      this.botao2 = this.cartao;
      this.botao3 = this.cartaoService.getCartaoRandom();

    } else if (this.random == 3){
      this.botao1 = this.cartaoService.getCartaoRandom();
      this.botao2 = this.cartaoService.getCartaoRandom();
      this.botao3 = this.cartao;

    }
  }

  public verificarResposta(){


  }

  ngOnInit() {
    
    this.opcoes();

    console.log("cartao: ", this.cartao)
    console.log("randomico: ", this.random)
  }

}
