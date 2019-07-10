let dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
  var numberedNames = ''; // created empty string OUTSIDE to run
  for (let i = 0; i < dwarves.length; i++) {
    let currentName = dwarves[i]; // indexed Names w/#'s'
    let currentNumber = i +1; // cuz starts with 0
    numberedNames += `${currentNumber}. ${currentName} `; // if only = will erase what's before, += keeps adding to each loop
        if(currentNumber != dwarves.length){
      numberedNames += '';
    }
  }
numberedNames += '';
return numberedNames;
}


function summonCaptainPlanet(planeteerCalls){
}


function longPlaneteerCalls(words) {
}


function findTheCheese (foods) {
}



console.log(numberedNames);

console.log("currentNumber: " + currentNumber + ", dwarves.length: " + dwarves.length)

