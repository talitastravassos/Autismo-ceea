import { Cartao } from './cartao.model';

export class CartaoService {

  public card: Array<Cartao> = [
    {
      "id": 1,
      "image": "../assets/imgs/0-abracar.jpg",
      "title": "Abraçar",
      "description": "Um abraço significa carinho, amor, afeto e amizade. Um abraço estabelece uma ligação íntima e saudável entre as pessoas. É bom tanto para quem dá, quanto para quem o recebe."
    },
    {
      "id": 2,
      "image": "../assets/imgs/1-abrir.jpg",
      "title": "Abrir",
      "description": "Separar, afastar o que está junto."
    },
    {
      "id": 3,
      "image": "../assets/imgs/2-ajudar.jpg",
      "title": "Ajudar",
      "description": "Ação de auxiliar, socorrer, facilitar, tornar algo mais fácil."
    },
    {
      "id": 4,
      "image": "../assets/imgs/3-amassar.jpg",
      "title": "Amassar",
      "description": "Fazer com que seja esmagado"
    },
    {
      "id": 5,
      "image": "../assets/imgs/4-andar.jpg",
      "title": "Andar",
      "description": "Movimentar-se voluntária ou involuntariamente"
    },
    {
      "id": 6,
      "image": "../assets/imgs/5-apagar(2).jpg",
      "title": "Apagar",
      "description": "Fazer desaparecer friccionando, raspando etc."
    },
    {
      "id": 7,
      "image": "../assets/imgs/6-apagar.jpg",
      "title": "Apagar",
      "description": "Fazer cessar, extinguir, interromper."
    },
    {
      "id": 8,
      "image": "../assets/imgs/7-beber.jpg",
      "title": "Beber",
      "description": "Engolir um líquido qualquer: beber água, suco, refrigerante."
    },
    {
      "id": 9,
      "image": "../assets/imgs/8-beijar.jpg",
      "title": "Beijar",
      "description": "Encostar, pousar os lábios."
    },
    {
      "id": 10,
      "image": "../assets/imgs/9-cair.jpg",
      "title": "Cair",
      "description": "Lançar de cima para baixo."
    },
    {
      "id": 11,
      "image": "../assets/imgs/10-cantar.jpg",
      "title": "Cantar",
      "description": "Emitir, com a voz, sons musicais."
    },
    {
      "id": 12,
      "image": "../assets/imgs/11-chupar.jpg",
      "title": "Chupar o pirulito",
      "description": "Sugar com a boca o pirulito"
    },
    {
      "id": 13,
      "image": "../assets/imgs/12-comer.jpg",
      "title": "Comer",
      "description": "Ingerir algum alimento, levando à boca e engolindo"
    },
    {
      "id": 14,
      "image": "../assets/imgs/13-pegar.jpg",
      "title": "Pegar",
      "description": "Segurar algo"
    },
    {
      "id": 15,
      "image": "../assets/imgs/14-triste.png",
      "title": "Tristeza",
      "description": "Estado que demonstra tristeza e que não possui alegria."
    },
    {
      "id": 16,
      "image": "../assets/imgs/15-correr.jpg",
      "title": "Correr",
      "description": "Mover-se rapidamente ou andar com velocidade."
    },
    {
      "id": 17,
      "image": "../assets/imgs/16-alegre.png",
      "title": "Alegria",
      "description": "Sentimento de contentamento ou de satisfação extrema."
    },
    {
      "id": 18,
      "image": "../assets/imgs/17-dançar.jpg",
      "title": "Dançar",
      "description": "Mover o corpo seguindo uma música e ritmo determinados."
    },
    {
      "id": 19,
      "image": "../assets/imgs/18-dar.jpg",
      "title": "Dar",
      "description": "Oferecer ou entregar alguma coisa a alguém."
    },
    {
      "id": 20,
      "image": "../assets/imgs/19-brigar.jpg",
      "title": "Brigar",
      "description": "Lutar ou provocar confusão."
    },
    {
      "id": 21,
      "image": "../assets/imgs/20-dormir.jpg",
      "title": "Dormir",
      "description": "Estar entregue ao sono, repousar."
    },
    {
      "id": 22,
      "image": "../assets/imgs/21-empurrar.jpg",
      "title": "Empurrar",
      "description": "Arrastar com vigor."
    },
    {
      "id": 23,
      "image": "../assets/imgs/22-acender.jpg",
      "title": "Acender",
      "description": "Queimar ou colocar fogo em algo."
    },
    {
      "id": 24,
      "image": "../assets/imgs/23-entrar.jpg",
      "title": "Entrar",
      "description": "Passar para dentro, introduzir-se, recolher-se à casa."
    },
    {
      "id": 25,
      "image": "../assets/imgs/24-esconder.jpg",
      "title": "Esconder",
      "description": "Pôr (algo, alguém ou si mesmo) em certo local onde não se consegue encontrar; ocultar-se."
    },
    {
      "id": 26,
      "image": "../assets/imgs/25-escrever.jpg",
      "title": "Escrever",
      "description": "Representar pela escrita, com palavras, caracteres ou sinais gráficos."
    },
    {
      "id": 27,
      "image": "../assets/imgs/26-escutar.jpg",
      "title": "Escutar",
      "description": "Prestar atenção, para ouvir alguma coisa."
    },
    {
      "id": 28,
      "image": "../assets/imgs/27-esfregar.jpg",
      "title": "Esfregar",
      "description": "Passar numerosas vezes, fazendo pressão, um objeto sobre o outro."
    },
    {
      "id": 29,
      "image": "../assets/imgs/28-ir.jpg",
      "title": "Ir",
      "description": "Mover-se de um local para outro."
    },
    {
      "id": 30,
      "image": "../assets/imgs/29-brincar.jpg",
      "title": "Brincar",
      "description": "Se divertir sozinho ou com outras pessoas"
    },
    {
      "id": 31,
      "image": "../assets/imgs/30-chamar.jpg",
      "title": "Chamar",
      "description": "Pedir para alguém vim."
    },
    {
      "id": 32,
      "image": "../assets/imgs/31-chorar.jpg",
      "title": "Chorar",
      "description": "Derramar lágrimas."
    },
    {
      "id": 33,
      "image": "../assets/imgs/32-chover.jpg",
      "title": "Chover",
      "description": "Cair água, em gotas, das nuvens."
    },
    {
      "id": 34,
      "image": "../assets/imgs/33-professor.jpg",
      "title": "Professor",
      "description": "Pessoa que ensina outras pessoas."
    },
    {
      "id": 35,
      "image": "../assets/imgs/34-ver.jpg",
      "title": "Ver",
      "description": "Enxergar ou captar a imagem de algo através da visão."
    },
    {
      "id": 36,
      "image": "../assets/imgs/35-olhar-se.jpg",
      "title": "Se olhar",
      "description": "Fitar os olhos em si mesmo através do espelho."
    },
    {
      "id": 37,
      "image": "../assets/imgs/36-morder.jpg",
      "title": "Morder",
      "description": "Apertar entre os dentes."
    },
    {
      "id": 38,
      "image": "../assets/imgs/37-menino.jpg",
      "title": "Menino",
      "description": "Criança do sexo masculino."
    },
    {
      "id": 39,
      "image": "../assets/imgs/39-mulher.jpg",
      "title": "Mulher",
      "description": "Ser humano do sexo feminino."
    },
    {
      "id": 40,
      "image": "../assets/imgs/39-assustado.png",
      "title": "Assustado",
      "description": "Expressão de medo ou susto."
    },
    {
      "id": 41,
      "image": "../assets/imgs/40-ouvir.jpg",
      "title": "Ouvir",
      "description": "Entender, perceber os sons pelo sentido da audição."
    },
    {
      "id": 42,
      "image": "../assets/imgs/41-cheirar.jpg",
      "title": "Cheirar",
      "description": "Usar o olfato para sentir cheiros."
    },
    {
      "id": 43,
      "image": "../assets/imgs/42-patinar.jpg",
      "title": "Patinar",
      "description": "Andar de patins, ir de um local para outro usando um calçado próprio com rodas presas à sua sola."
    },
    {
      "id": 44,
      "image": "../assets/imgs/43-cansado.png",
      "title": "Cansaço",
      "description": "Fadiga, canseira ou fraqueza causada pelo excesso de exercício, de trabalho ou por doença."
    },
    {
      "id": 45,
      "image": "../assets/imgs/44-pescar.jpg",
      "title": "Pescar",
      "description": "Pegar peixes."
    },
    {
      "id": 46,
      "image": "../assets/imgs/3-amassar.jpg",
      "title": "Pintar",
      "description": "Reproduzir por linhas e/ou por cores, colorir desenhos."
    },
    {
      "id": 47,
      "image": "../assets/imgs/46-gostar_de_alguem.jpg",
      "title": "Gostar de alguém",
      "description": "Ter compatibilidade com alguém."
    },
    {
      "id": 48,
      "image": "../assets/imgs/47-rir.jpg",
      "title": "Rir",
      "description": "Contrair os músculos do rosto por alegria, por achar algo engraçado"
    },
    {
      "id": 49,
      "image": "../assets/imgs/48-quebrar.jpg",
      "title": "Quebrar",
      "description": "Reduzir a pedaços, partir, romper, fragmentar."
    },
    {
      "id": 50,
      "image": "../assets/imgs/49-pular.jpg",
      "title": "Pular",
      "description": "Dar pulos e saltar."
    },
    {
      "id": 51,
      "image": "../assets/imgs/50-cumprimentar.jpg",
      "title": "Cumprimentar",
      "description": "Felicitar alguém e ser retribuído."
    },
    {
      "id": 52,
      "image": "../assets/imgs/51-tocar.jpg",
      "title": "Tocar",
      "description": "Pôr as mãos em algo."
    },
    {
      "id": 53,
      "image": "../assets/imgs/52-trabalhar.jpg",
      "title": "Trabalhar",
      "description": "Dedicar-se a uma atividade."
    },
    {
      "id": 54,
      "image": "../assets/imgs/53-varrer.jpg",
      "title": "Varrer",
      "description": "Limpar com vassoura."
    },
    {
      "id": 55,
      "image": "../assets/imgs/54-assistir.jpg",
      "title": "Assistir à TV",
      "description": "Acompanhar algo pela tv."
    },
    {
      "id": 56,
      "image": "../assets/imgs/55-chorar.png",
      "title": "Chorar",
      "description": "Derramar lágrimas."
    },
    {
      "id": 57,
      "image": "../assets/imgs/56-entediado.png",
      "title": "Tédio",
      "description": "Sentimento de aborrecimento e desgosto, pode ser provocado pela demora na realização de alguma coisa."
    },
    {
      "id": 58,
      "image": "../assets/imgs/57-estar-bem.png",
      "title": "Bem-estar",
      "description": "Estado da pessoa tranquila, de quem está seguro ou confortável."
    },
    {
      "id": 59,
      "image": "../assets/imgs/58-furioso.png",
      "title": "Furioso",
      "description": "Alguém enfurecido e repleto de fúria."
    },
    {
      "id": 60,
      "image": "../assets/imgs/59-nervoso.png",
      "title": "Nervoso",
      "description": "Alguém que não para quieto, é inquieto e tenso."
    },
    {
      "id": 61,
      "image": "../assets/imgs/60-preocupado.png",
      "title": "Preocupação",
      "description": "Perda do sossego, causada pelo sentimento de responsabilidade em relação a alguma coisa"
    },
    {
      "id": 62,
      "image": "../assets/imgs/61-surpreso.png",
      "title": "Surpresa",
      "description": "O que provoca espanto."
    },
    {
      "id": 63,
      "image": "../assets/imgs/62-ter-medo.png",
      "title": "Medo",
      "description": "Estado emocional provocado pela consciência que se tem diante do perigo."
    },
    {
      "id": 64,
      "image": "../assets/imgs/63-tranquilo.png",
      "title": "Tranquilidade",
      "description": "Estar tranquilo, isento de agitações, de inquietações, de perturbações ou de alvoroço."
    }
  ]

  public getCartao(): Array<Cartao> {

    return this.card
  }
}