import fs from "fs"

class DogCard {

    constructor(id, text, color){
        this.id= id
        this.text= text
        this.color= color
    }

}

let cards = []


let LoadData = () => {
    console.log(`LoadData Loaded`);
fs.readFile("bd/cards.json", 'utf8', (err, data) => {
    console.log(`LoadData readFile Loaded`);
    if (err) {
        // if not found
        if(err.errno === -4058 ) {
            console.error(err);
            fs.writeFile("bd/cards.json", '[]', (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("Ok!\n");
                }
            });
        } else {
            console.log(err);
        }
    } else {
        console.log(`LoadData parse Loaded`);
       cards = JSON.parse(data)
        console.log(`Loaded ${cards.length}`);


        console.log(`cards: ${cards}`);
        return cards
}
});
console.log(`\n`);
}

let NewCardId = () => {
    console.log(`NewCardId Loaded`);
    console.log(`NewId: ${cards[cards.length-1].id+1} LastId: ${cards[cards.length-1].id}`);
    console.log(`NewCardID ${cards}`)
    return cards[cards.length-1].id+1
   
}


//LoadData()
// NewCardId()

const getDogCards = ()=>{
    console.log(`getDogCards Loaded`);
    console.log(`\n`);
    
    return cards
    
}

export {getDogCards, LoadData, NewCardId, DogCard}