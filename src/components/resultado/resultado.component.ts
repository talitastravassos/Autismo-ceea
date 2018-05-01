import { Component } from '@angular/core';

/**
 * Generated class for the ResultadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'resultado',
  templateUrl: 'resultado.component.html'
})
export class ResultadoComponent {

  text: string;

  constructor() {
    console.log('Hello ResultadoComponent Component');
    this.text = 'Hello World';
  }

}
