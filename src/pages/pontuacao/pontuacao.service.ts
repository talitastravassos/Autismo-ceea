export class PontuacaoService {

    /**
     * contagem da partida
     */
    public contagem(n: number) {
        if (Number(localStorage.getItem("cont")) == 0) {
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
        let pontuacaoObj = {
            id: 0,
            acertos: 0,
            erros: 0,
            aproveitamento: 0
        }

        pontuacaoObj.id = Number(localStorage.getItem("cont"))
        pontuacaoObj.acertos = acertos
        pontuacaoObj.erros = erros
        pontuacaoObj.aproveitamento = aproveitamento

        localStorage.setItem("pontuacaoObj_" + localStorage.getItem("cont"), JSON.stringify(pontuacaoObj))
    }

    /**
     * getPontuação
     */
    public getPontuacao(n: number): Object {
        return JSON.parse(localStorage.getItem("pontuacaoObj_" + n))
    }

    public getArrayPontuacoes(): Array<Object> {
        return JSON.parse(localStorage.getItem("pontuacoes"))
    }

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

    /**
     * deleteScores
     */
    public deleteScores() {
        let cont = this.getContagem();

        
        
    }

}