'use strict';

function App() {

  let wins = 0;
  let losses = 0;
  let Money = 150;
  let data = [];

  let i = 10000;

  while(i > 0){
    data = Session(wins, losses, Money);

    if(data[1] > losses){
      Money = 150;
    }
    else{
      Money = data[2];
    }

    wins = data[0];
    losses = data[1];

    i-= 1;
  }


  function Session(wins, losses, Money){

    function IsEven(number){
      if(((number % 2) == 0) && (number != 0)){
        console.log("Even");
        return true
      }
      else{
        console.log("Odd");
        return false;
      }
    }

    function RNG() {
      let Possibilities = [0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
      let Number = Possibilities[Math.floor((Math.random() * Possibilities.length))]
      console.log(Number);
      return Number;
    }

    let currentBet = Money / 15;

    while(true){
      if(IsEven(RNG())){
        Money += currentBet;
        console.log("won");
        wins += 1;
        break;
      }
      else{
        console.log("lost");
        Money -= currentBet;
        currentBet = currentBet * 2;
      }
      if(Money < 1){
        losses += 1;
        console.log("lost everything")
        break;
      }
    }

    return [wins, losses, Money];
  }

  console.log("Wins: ", wins);
  console.log("Losses: ", losses);
  console.log("Money: ", Money);
  console.log("");
  console.log("Porcentaje de Win: ", (wins / 100), "%")

}

App();
