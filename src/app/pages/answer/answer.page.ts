import { MatchService } from './../../services/match/match.service';
import { CardModel } from './../../models/card.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {

  constructor(
    //private cardService: CardsService,
    public matchService: MatchService,
    public navCtrl: NavController,
    public activateRoute: ActivatedRoute
    ) { }

  currentCard: CardModel
  isRight: string

  /**
   * isCorrect
   */
  public isCorrect(): string {

    let bool = Number(this.activateRoute.snapshot.paramMap.get('bool'));

    if ( bool == 1) {
      this.isRight = "Resposta correta!"
    } else {
      this.isRight = "Resposta errada!"
    }

    return this.isRight    
  }

  /**
   * Push na proxima pagina
   */
  public next() {
    let count: number = this.matchService.getNumMatch() // countador da rodada para saber quando finalizar o jogo
    console.log("contador da rodada: ", count)

      if (count == 10) {
        this.navCtrl.navigateRoot('result');
      } else {
        this.navCtrl.navigateRoot('game');
      }

  }



  ngOnInit() {

    this.currentCard = this.matchService.getCurrentCard();
    console.log('answer page: ', this.currentCard);
    
  }

}
