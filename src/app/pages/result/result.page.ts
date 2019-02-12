import { ScoresService } from './../../services/scores/scores.service';
import { MatchService } from './../../services/match/match.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    //public navParams: NavParams,
    public matchService: MatchService,
    public scoreService: ScoresService
  ) { }

  hits: number
  mistakes: number
  numMatch: number
  profit: number

    /**
   * resetMatch: function that resets the current round data saved in sessionStorage to start a new game.
   */
  public resetMatch() {
    this.matchService.resetData()
    this.navCtrl.navigateRoot('home')
  }

    /**
   * profit
   */
  public profitMatch(): number {
    this.profit = (this.hits/10) * 100;

    return Math.round(this.profit)    
  }

  /**
   * ScoreData
   */
  public setScoreData() {
    this.scoreService.count(1)
    this.scoreService.setScore( this.hits, this.mistakes, this.profit) 
  }

  ionViewWillEnter() {
    console.log('ionViewDidEnter ResultPage');
    this.hits = this.matchService.getHits()
    this.mistakes = this.matchService.getMistakes()
    this.profitMatch()
    this.setScoreData()

    console.log("acertos: ", this.hits)
    console.log("erros: ", this.mistakes)
  }

  ngOnInit() {

  }

}
