let userName = prompt("What is your name?")

alert(`Oh, hello ${userName}!`)

const startGame = () => {
    let userPlay = confirm("Are you ready SOLDIER?")
    playGame(userPlay)
  }

const playGame = (choice) => {
    if (choice) {
      alert("Ok! Let's go, everyones waiting for you!")
      chooseDoors()
    } else {
      alert("You are letting your team down!")
    }
  }

  const chooseDoors = () => {
    let doorChoice = prompt("FINALLY! You took forever! Team couldnt wait any longer. We need to catch up with them. Do you want to DRIVE, WALK, or RUN to catch up with the rest?")
  
    if (doorChoice === "DRIVE") {
      let banana = prompt("OK, you want. So now we have to choose between the JEEP, FORD, or the HUMMER.")
        if (banana === "JEEP") {
            alert("This jeep is fast. We caught up to them super fast.")
            startGame()
        } else if (banana=== "FORD") {
            alert ("This car is super old. Atleast we caught up with the team.")
            startGame()
        } else if (banana === "HUMMER")
            alert ("This HUMMER is crazy. I see the team upahead. We made it.")
            startGame()

            let doorChoice = prompt("FINALLY! You took forever! Team couldnt wait any longer. We need to catch up with them. Do you want to DRIVE, WALK, or RUN to catch up with the rest?")
  
    }else if (doorChoice === "WALK") {
              let apple = prompt("Thats going to take forever. We have to choose which road. We can choose road A, B, or C.")
                if (apple === "A") {
                    alert("Ok. Lets go road A. Thats going to take us around 45mins! we better get going.")
                    startGame()
                } else if (apple === "B") {
                    alert ("Fine. Road B it is. Atleast you took the shortcut. We will be there in 30mins.")
                    startGame()
                } else if (apple === "C") 
                    alert ("Lets go. Road C is best way to get there. It will only take 15mins.")
                    startGame()
        

      

    

            }else if (doorChoice === "RUN") {
                        let grape = prompt("If we want to run over there we will need to be hydrated. Do you want WATER, JUICE, or SODA ?")
                          if (grape === "WATER") {
                              alert("I got cold waters. Now lets go.")
                              startGame()
                          } else if (grape === "JUICE") {
                              alert ("Here, take these. Its apple juice. Now lets go.")
                              startGame()
                          } else if (grape === "SODA")
                              alert ("I only have one sprite. Take it with you.Lets leave right now.")
                              startGame()




    } else {
      alert("That wasn't a choice!")
      
    }
  

}

  startGame()