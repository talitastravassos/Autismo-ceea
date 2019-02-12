import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() { }

    /**
     * count game
     */
    public count(n: number) {

      if (Number(localStorage.getItem("count")) == 0) {
          localStorage.setItem("count", JSON.stringify(n))
      } else {
          n = n + (Number(localStorage.getItem("count")))
          localStorage.setItem("count", JSON.stringify(n))
      }
  }


    /**
     * setScore
     */
    public setScore(hits: number, mistakes: number, profit: number) {
      let scoreObj = {
          id: 0,
          hits: 0,
          mistakes: 0,
          profit: 0
      }

      scoreObj.id = Number(localStorage.getItem("count"))
      scoreObj.hits = hits
      scoreObj.mistakes = mistakes
      scoreObj.profit = profit

      localStorage.setItem("scoreObj_" + localStorage.getItem("count"), JSON.stringify(scoreObj))
  }

  /**
   * getPontuação
   */
  public getScore(n: number): Object {
      return JSON.parse(localStorage.getItem("scoreObj_" + n))
  }


  /**
   * getContagem
   */
  public getCount(): number {
      return Number(localStorage.getItem("count"))
  }


}
