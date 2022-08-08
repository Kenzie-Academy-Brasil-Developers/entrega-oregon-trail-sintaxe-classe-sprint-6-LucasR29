class Traveler{
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true

    }
    hunt(){
        this.food += 2
    }
    eat(){
        this.food >= 1 ? this.food-- : this.isHealthy = false
    }
}

class Wagon{
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvaiableSeatCount(){
        return `Avaible seats ${this.capacity}`
    }

    join(name){
        //let passenger = new Traveler(name)
        if(this.capacity > 0){
            this.passengers.push(name)
            this.capacity--
        }else{
            return console.log(`Sem espaço para ${name.name}`)
        }
    }

    shouldQuarentine(){
        for(let i = 0; i < this.passengers.length; i++){
            if(this.passengers[i].isHealthy === false){
                return `${this.passengers[i].name} is sick, quarentine: ${true}`
            }
        }
        return `No one is sick`
    }

    totalFood(){
        let total = 0
        for(let i = 0; i < this.passengers.length; i++){
            total += this.passengers[i].food
        }
        return `Avaiable food: ${total}`
    }

    clearWagon(){
        return this.passengers = []
    }
}

let wagon = new Wagon(2)

let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')

console.log(wagon.getAvaiableSeatCount())

wagon.join(henrietta)

console.log(wagon.getAvaiableSeatCount())

wagon.join(juan)
wagon.join(maude)

console.log(wagon.getAvaiableSeatCount())

henrietta.hunt()
juan.eat()
juan.eat()

console.log(wagon.shouldQuarentine())
console.log(wagon.totalFood())
console.log(`Existe uma função chamada clearWagon para caso precise limpar os locais para fazer testes`)