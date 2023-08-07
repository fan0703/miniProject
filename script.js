// // creat spaceship object
const usSpaceship = {
    name : "USS Schwarzenegger",
    Hull : 20,
    FirePower : 5,
    Accuracy :.7,
}

function attack(){
    if(Math.random() >= 0.7){
        while(alienShips[0].Hull > 0)
        return ("You hit it!")
    }else{
    return ('missed')
    }
}

function getShooted(){
    if(Math.random() < 0.7){
        return ('You have been hit!')
        Hull = Hull - (alienShips[0].FirePower)
        if(Hull = 0){
            return ("USS Schwarzenegger is destroyed, Game over!")
        }
    }

}
  
function makeChoice(){    
    if(alienShips[0].Hull = 0){
    return('retreat or continue attack alienShips[1]')
    } 
        if(select === "retreat"){
            return("Game is over!")
        } 
        if(select === "continue attack alienShips[1]"){
            usSpaceship.attack() 
        }
}

usSpaceship.attack()
usSpaceship.getShooted()
usSpaceship.makeChoice()


  
     

//creat alien spaceship object

class AlienSpaceship {
    constructor(name, Hull, FirePower, Accuracy){
    this.name = name;
    this.Hull = Math.floor(Math.random()*4+3);
    this.FirePower = Math.floor(Math.random()*3+2);
    this.Accuracy = Math.random(); //how to let it in 0.6-0.8
}

getShooted(){
        if(Math.random() < alienShips[0].Accuracy){
            return ('You have been hit!')
            Hull = Hull - 5
            if(Hull = 0){
                return ("alienShips[0] is destroyed")
            }
        }
    
    }
attack(){
    if(Math.random() >= alienShips[0].Accuracy){
        while(usSpaceship.Hull > 0)
        return ("You hit it!")
    }else{
        return ('missed')
        }
    }
}

class ShipFactory{
    constructor(Enemy){
        this.Enemy = Enemy;
        this.alienShips = [];
    }
    generateShip(name, Hull, FirePower, Accuracy) {
        const newShip = new AlienSpaceship(name, Hull, FirePower, Accuracy)
        this.alienShips.push(newShip)
    }   
}
const ship1 = new ShipFactory("alien")
console.log(ship1)
ship1.generateShip('alienShip0', Math.floor(Math.random()*4+3),Math.floor(Math.random()*3+2),Math.random())
console.log(ship1.alienShips)
ship1.generateShip('alienShip1', Math.floor(Math.random()*4+3),Math.floor(Math.random()*3+2),Math.random())
console.log(ship1.alienShips)
ship1.generateShip('alienShip2', Math.floor(Math.random()*4+3),Math.floor(Math.random()*3+2),Math.random())
console.log(ship1.alienShips)
ship1.generateShip('alienShip3', Math.floor(Math.random()*4+3),Math.floor(Math.random()*3+2),Math.random())
console.log(ship1.alienShips)
ship1.generateShip('alienShip4', Math.floor(Math.random()*4+3),Math.floor(Math.random()*3+2),Math.random())
console.log(ship1.alienShips)
ship1.generateShip('alienShip5', Math.floor(Math.random()*4+3),Math.floor(Math.random()*3+2),Math.random())
console.log(ship1.alienShips)