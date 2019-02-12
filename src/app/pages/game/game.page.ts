import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards/cards.service';
import { MatchService } from 'src/app/services/match/match.service';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor(
    private cardService: CardsService,
    public matchService: MatchService,
    public navCtrl: NavController
    ) { }


  /* variable that defines which button will display the correct answer */
  random: number;
  hits: number = 0
  mistakes: number = 0
  match: number;

  public card: CardModel
  public button1: CardModel
  public button2: CardModel
  public button3: CardModel


  /**
   * initButtons
   */
  public initButtons() {
    this.button1 = this.cardService.getCardRandom()
    this.button2 = this.cardService.getCardRandom()
    this.button3 = this.cardService.getCardRandom()
    
  }

  /**
   * Function that determines the alternatives shown on the buttons
   */
  public options() {
    this.initButtons();
    
    this.card = this.cardService.getCardRandom()

    if (this.random == 1) {
      this.button1 = this.card;
      
      while (this.button1 == this.button2 || this.button1 == this.button3 || this.button2 == this.button3) {
        this.button2 = this.cardService.getCardRandom();
        this.button3 = this.cardService.getCardRandom(); 
      }

    } else if (this.random == 2) {
      this.button2 = this.card;
      
      while (this.button2 == this.button1 || this.button2 == this.button3 || this.button1 == this.button3) {
        this.button1 = this.cardService.getCardRandom();
        this.button3 = this.cardService.getCardRandom();
      }

    } else if (this.random == 3) {
      this.button3 = this.card;

      while (this.button3 == this.button1 || this.button3 == this.button2 || this.button1 == this.button2) {
        this.button1 = this.cardService.getCardRandom();
        this.button2 = this.cardService.getCardRandom();
      }

    }
  }

  /**
   * Function that checks if the answers are correct and increments the errors, 
   * hits and number of the round in the sessionStorage
   */
  public verifyAnswer(answer: CardModel) {
    let numMatch = 1;
    let boolAnswer = null;

    console.log(answer)

    if(answer == this.card){
      this.hits = 1
      boolAnswer = 1;
      //console.log("hits: ", this.hits)
      this.matchService.setHits(this.hits)// hits++
      this.matchService.setNumMatch(numMatch)// numMatch++
      this.matchService.setCurrentCard(this.card);
      this.navCtrl.navigateForward(`/answer/${boolAnswer}`)
     // this.navCtrl.push(answerPage, { answer: this.cartao, hits: this.hits, mistakes: this.mistakes })// push na Pageanswer
    } else {
      this.mistakes = 1
      boolAnswer = 0;
      //console.log("mistakes: ", this.mistakes)
      this.matchService.setMistakes(this.mistakes)// mistakes++
      this.matchService.setNumMatch(numMatch)// numMatch++
      this.matchService.setCurrentCard(this.card);
      this.navCtrl.navigateForward(`/answer/${boolAnswer}`)
      //this.navCtrl.push(answerPage, { answer: this.cartao, hits: this.hits, mistakes: this.mistakes })// push na Pageanswer
    }

  }

  ionViewDidEnter(){
    this.match = (this.matchService.getNumMatch()) + 1;
    this.random = Math.floor((Math.random() * 3) + 1);
    this.options();

    console.log("card: ", this.card)
    console.log("random: ", this.random)

  }

  ngOnInit() {

  }

}
