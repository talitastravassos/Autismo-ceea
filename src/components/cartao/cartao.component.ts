import { Component } from '@angular/core';

/**
 * Generated class for the CartaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cartao',
  templateUrl: 'cartao.component.html'
})
export class CartaoComponent {

  text: string;

  constructor() {
    console.log('Hello CartaoComponent Component');
    this.text = 'Hello World Component';
  }

}
