class DogCard {

    constructor(attr){
        this.id= attr.id
        this.text= attr.text
        this.color= attr.color
    }

}

let cards = []
cards.push(
    new DogCard({id:0, text:"Піклуйся про здоров’я", color:"#FF6F35"}),
    new DogCard({id:1, text:"Причепури красунчика", color:"#AECB54"}),
    new DogCard({id:2, text:"sfdslkf;lskdа", color:"#000"}),
    new DogCard({id:3, text:"Причепури красунчика", color:"#AECB54"}),
    new DogCard({id:4, text:"Причепури здоров’я", color:"green"}),
)

const getDogCards = function(){
    return cards
}

export {getDogCards}