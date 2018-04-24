import { Component } from '@angular/core';

/**
 * Generated class for the BotaosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'botaos',
  templateUrl: 'botaos.html'
})
export class BotaosComponent {

  text: string;

  constructor() {
    console.log('Hello BotaosComponent Component');
    this.text = 'Hello World';
  }

  public opcaoErrada(){
    
  }

  public opcaoCerta(){

  }

}
