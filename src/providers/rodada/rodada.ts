import { Injectable } from '@angular/core';

@Injectable()
export class RodadaProvider {

  constructor() {

  }

  /**
   * Sets: grava dados
   */
  public setAcertos(acertos: number) {

    if (Number(sessionStorage.getItem("acertos")) == 0) {
      sessionStorage.setItem("acertos", JSON.stringify(acertos))
    } else {
      acertos = acertos + (Number(sessionStorage.getItem("acertos")))
      sessionStorage.setItem("acertos", JSON.stringify(acertos))
    }

  }

  public setErros(erros: number) {

    if (Number(sessionStorage.getItem("erros")) == 0) {
      sessionStorage.setItem("erros", JSON.stringify(erros))
    } else {
      erros = erros + (Number(sessionStorage.getItem("erros")))
      sessionStorage.setItem("erros", JSON.stringify(erros))
    }

  }

  public setNumeroRodada(numero: number) {

    if (Number(sessionStorage.getItem("numero")) == 0) {
      sessionStorage.setItem("numero", JSON.stringify(numero))
    } else {
      numero = numero + (Number(sessionStorage.getItem("numero")))
      sessionStorage.setItem("numero", JSON.stringify(numero))
    }

  }

  /**
   * Gets: Recupera dados
   */
  public getAcertos(): number {
    return Number(sessionStorage.getItem("acertos"))
  }

  public getErros(): number {
    return Number(sessionStorage.getItem("erros"))
  }

  public getNumeroRodada(): number {
    return Number(sessionStorage.getItem("numero"))
  }
}
