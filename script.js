// // creat spaceship object
const usSpaceship = {
    name : "USS Schwarzenegger",
    Hull : 20,
    FirePower : 5,
    Accuracy :.7,
}

//creat alien spaceship object

class AlienSpaceship {
    constructor(name, Hull, FirePower, Accuracy){
    this.name = name;
    this.Hull = Math.floor(Math.random()*4+3);
    this.FirePower = Math.floor(Math.random()*3+2);
    this.Accuracy = Math.random(); //how to let it in 0.6-0.8
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
const enemyShips = ship1.alienShips;

for(i = 0; i < enemyShips.length; i++){
    function attack(){
    if(Math.random() >= usSpaceship.Accuracy){
        while(enemyShips[i].Hull > 0)
        enemyShips.Hull -= usSpaceship.FirePower
        console.log ("You hit it!")
    }else{
       console.log ('missed')
      }
    }
  
    function getShooted(){
      if(Math.random() >= enemyShips[i].Accuracy){
          console.log ('You have been hit!')
          usSpaceship.Hull -= enemyShips[i].FirePower
          if(usSpaceship.Hull = 0){
            console.log ("USS Schwarzenegger is destroyed, Game over!")
          }
       }
  
    }
  
    function makeChoice(){    
      if(enemyShips[i].Hull = 0){
      console.log(`${enemyShips[i]} + is destroyed`)
      console.log ('retreat or continue attack enemyShips[i++]')
      } 
        if(select === "retreat"){
              return("Game is over!")
        } 
        if(select === "continue attack enemyShips[i++]"){
            while(enemyShips[i++].Hull > 0){
            return attack() //???
            }if(enemyShips[i++].Hull = 0){
                console.log("You win!")
            }
        }
    }
}
  








// getShooted(){
//         if(Math.random() < alienShips[0].Accuracy){
//             return ('You have been hit!')
//             Hull = Hull - 5
//             if(Hull = 0){
//                 return ("alienShips[0] is destroyed")
//             }
//         }
    
//     }
// attack(){
//     for(i = 0; i < alienShips.length; i++)
//     if(Math.random() >= alienShips[i].Accuracy){
//         // while(usSpaceship.Hull > 0)
//         return ("You hit USS Schwarzenegger!")
//     }else{
//         return ('missed')
//         }
//     }
// }

