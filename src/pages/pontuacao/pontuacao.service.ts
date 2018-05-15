import { Score } from '../../models/score';

export class PontuacaoService {
    public pontuacoes: Array<Score>

    /**
     * contagem da partida
     */
    public contagem(n: number) {
        if( Number(localStorage.getItem("cont")) == 0 ){
            localStorage.setItem("cont", JSON.stringify(n))
        } else {
            n = n + (Number(localStorage.getItem("cont")))
            localStorage.setItem("cont", JSON.stringify(n))
          }
    }

  
    /**
     * setPontuação
     */
    public setPontuação(acertos: number, erros: number, aproveitamento: number) {
        localStorage.setItem("acertos_" + localStorage.getItem("cont"), JSON.stringify(acertos))
        localStorage.setItem("erros_" + localStorage.getItem("cont"), JSON.stringify(erros))
        localStorage.setItem("aproveitamento_" + localStorage.getItem("cont"), JSON.stringify(aproveitamento))    
    }

    /**
     * getPontuação
     */
    public getAcertos(n: number): number {
        return Number(localStorage.getItem("acertos_" + n))
    }

    public getErros(n: number): number {
        return Number(localStorage.getItem("erros_" + n))
    }

    public getAproveitamento(n: number): number {
        return Number(localStorage.getItem("aproveitamento_" + n))
    }

    /**
     * getContagem
     */
    public getContagem(): number {
        return Number(localStorage.getItem("cont"))
    }

}