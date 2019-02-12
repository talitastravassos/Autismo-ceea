import { CardModel } from './../../models/card.model';
import { CardsService } from './../../services/cards/cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(
    private cardService: CardsService
  ) { }

  public cards: Array<CardModel>

  getCards(){
    this.cards = this.cardService.getCard()
    console.log(this.cards)
  }

  ngOnInit() {

    console.log('TrainingPage');

    this.getCards()
  }

}
