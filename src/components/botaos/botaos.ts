import { Cartao } from './../cartao/cartao.model';
import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao/cartao.service';

@Component({
  selector: 'botaos',
  templateUrl: 'botaos.html',
  providers: [
    CartaoService
  ]
})
export class BotaosComponent implements OnInit{

  text: string;
  botao1: Cartao
  botao2: Cartao
  botao3: Cartao
  acertos: number = 0;
  erros: number = 0;
  random: number[]

  constructor(private cartaoService: CartaoService) {
    console.log('Hello BotaosComponent Component');
    this.text = 'Hello World';
    //this.cartaos = this.cartaoService.getCartao();
  }

  public opcaoErrada(): void{
    this.erros++
    console.log("resposta errada: ", this.erros)
    
  }

  public opcaoCerta(): void{
    this.acertos++

    console.log("resposta certa: ", this.acertos)    
  }

  ngOnInit(){
    this.botao1 = this.cartaoService.getCartaoRandom();
    this.botao2 = this.cartaoService.getCartaoRandom();
    this.botao3 = this.cartaoService.getCartaoRandom();
    
    
    console.log("botão componente: ", this.botao1)
  }

}
