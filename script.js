// creat spaceship object
const usSpaceship = {
    name: "USS Schwarzenegger",
    Hull: 20,
    FirePower: 5,
    Accuracy: .7,

    attack(){
    //    usSpaceship.attack()
       if(Math.random() < usSpaceship.Accuracy){
        console.log('You have been hit!')
        Hull = Hull - (alienSpaceship.FirePower)
     }
       if(Math.random() > usSpaceship.Accuracy){
            do{
                attack()
            } while(alienSpaceship.Hull > 0)
            if(alienSpaceship.Hull = 0){
                let select = ''
                console.log('retreat or continue attack')
            } if(select === "retreat"){
                console.log("Game is over")
            // } if(select === "continue attack"){
            //     usSpaceship.attack() //attack next ship
            // }
        
     }

    }
}
}
console.log(usSpaceship.attack())
  
     

//creat alien spaceship object
const alienSpaceship = {
    name: "alienSpaceship1",
    Hull : 6,
    FirePower: 3,
    Accuracy: .6,
}