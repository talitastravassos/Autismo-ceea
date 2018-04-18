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

  random: number = Math.floor((Math.random() * 64) + 1);

  public cartaos: Cartao[]
  public randomCartao: Cartao

  constructor(private cartaoService: CartaoService) {
    console.log('Hello CartaoComponent Component')
    //console.log(this.cartaoService.getCartao())
  }

  ngOnInit() {
    this.cartaos = this.cartaoService.getCartao()
    //this.random = Math.floor((Math.random() * (this.cartaos.length)) + 1);

    //this.cartaos = this.cartaoService.getCartao()

    console.log(this.cartaos)
    console.log(this.random)
  }

}
