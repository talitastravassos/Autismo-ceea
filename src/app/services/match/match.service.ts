import { CardModel } from './../../models/card.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() { }

  /**
   * Sets: set hits and mistakes
   */
  public setHits(hits: number) {

    if (Number(sessionStorage.getItem("hits")) == 0) {
      sessionStorage.setItem("hits", JSON.stringify(hits))
    } else {
      hits = hits + (Number(sessionStorage.getItem("hits")))
      sessionStorage.setItem("hits", JSON.stringify(hits))
    }

  }

  /* Set current card of match in sessionStorage */
  public setCurrentCard(card: CardModel){
    sessionStorage.setItem("currentCard", JSON.stringify(card))
  }

  
  public setMistakes(mistakes: number) {

    if (Number(sessionStorage.getItem("mistakes")) == 0) {
      sessionStorage.setItem("mistakes", JSON.stringify(mistakes))
    } else {
      mistakes = mistakes + (Number(sessionStorage.getItem("mistakes")))
      sessionStorage.setItem("mistakes", JSON.stringify(mistakes))
    }

  }

  public setNumMatch(numMatch: number) {
  
    if (Number(sessionStorage.getItem("numMatch")) == 0) {
      sessionStorage.setItem("numMatch", JSON.stringify(numMatch))
    } else {
      numMatch = numMatch + (Number(sessionStorage.getItem("numMatch")))
      sessionStorage.setItem("numMatch", JSON.stringify(numMatch))
    }

  }

  /**
   * Gets: Recover data
   */
  public getHits(): number {
    return Number(sessionStorage.getItem("hits"))
  }

  public getMistakes(): number {
    return Number(sessionStorage.getItem("mistakes"))
  }

  public getNumMatch(): number {
    return Number(sessionStorage.getItem("numMatch"))
  }

  /**
   * getCurrentCard
   */
  public getCurrentCard(): CardModel {
    
    return JSON.parse(sessionStorage.getItem("currentCard"));
  }

  /**
   * resetData
   */
  public resetData() {
    sessionStorage.removeItem("numMatch")
    sessionStorage.removeItem("hits")
    sessionStorage.removeItem("mistakes")
  }

}


