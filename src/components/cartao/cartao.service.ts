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
          "description": ""
        },
        {
          "id": 3,
          "image": "../assets/imgs/2-ajudar.jpg",
          "title": "Ajudar",
          "description": ""
        },
        {
          "id": 4,
          "image": "../assets/imgs/3-amassar.jpg",
          "title": "Amassar",
          "description": ""
        },
        {
          "id": 5,
          "image": "../assets/imgs/4-andar.jpg",
          "title": "Andar",
          "description": ""
        },
        {
          "id": 6,
          "image": "../assets/imgs/5-apagar(2).jpg",
          "title": "Apagar",
          "description": ""
        },
        {
          "id": 7,
          "image": "../assets/imgs/6-apagar.jpg",
          "title": "Ajudar",
          "description": ""
        },
        {
          "id": 8,
          "image": "../assets/imgs/7-beber.jpg",
          "title": "Beber",
          "description": ""
        },
        {
          "id": 9,
          "image": "../assets/imgs/8-beijar.jpg",
          "title": "Beijar",
          "description": ""
        },
        {
          "id": 10,
          "image": "../assets/imgs/9-cair.jpg",
          "title": "Cair",
          "description": ""
        },
        {
          "id": 11,
          "image": "../assets/imgs/10-cantar.jpg",
          "title": "Cantar",
          "description": ""
        },
        {
          "id": 12,
          "image": "../assets/imgs/11-chupar.jpg",
          "title": "Chupar o pirulito",
          "description": ""
        },
        {
          "id": 13,
          "image": "../assets/imgs/12-comer.jpg",
          "title": "comer",
          "description": ""
        },
        {
          "id": 14,
          "image": "../assets/imgs/13-pegar.jpg",
          "title": "Pegar",
          "description": ""
        }
      ]
    
    public getCartao(): Array<Cartao>{       

          return this.card
    }
}