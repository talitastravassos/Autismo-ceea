import { ScoresService } from './../../services/scores/scores.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public scoreService: ScoresService
  ) { }

  hits: Array<number>
  mistakes: Array<number>
  profit: Array<number>
  count: number

  currentScores: Array<Object>

    /*
   * getArrayPontuacoes: função que retorna um array com todas as pontuações salvas no localStorage até
   * o momento
   */
  public getArrayScores(): Array<Object> {
    let arrayScores = []

    for (let index = 1; index <= this.count; index++) {
      let obj = this.scoreService.getScore(index);
      arrayScores.push(obj)
    }

    //console.log("Array de objetos recebido: ", arrayPontuacoes)

    return arrayScores
  }

  ngOnInit() {

    console.log('ScorePage');
    this.count = this.scoreService.getCount();

    this.currentScores = this.getArrayScores()
    console.log("Pontuações Atuais: ", this.currentScores)
  }

}
