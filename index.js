let dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  let numberedNames = ''; // created empty string OUTSIDE to run
  let dwarvesLength = dwarves.length;
  for (let i = 0; i < dwarvesLength; i++) {
    let currentName = dwarves[i]; // indexed Names w/#'s'
    let currentNumber = i +1; // cuz starts with 0
    numberedNames += `${currentNumber}. ${currentName} `; // if only = will erase what's before, += keeps adding to each loop
        if(currentNumber != dwarvesLength){
      numberedNames += '';
    }
  }
numberedNames += '';
return numberedNames;
}


function summonCaptainPlanet(planeteerCalls){
  let call = []; // new array
   let planeteerCallsLength = planeteerCalls.length; // now get the lengtht of 1st array
  for (let i = 0; i < planeteerCallsLength; i++) {
    let currentName = planeteerCalls[i]; 
   call.push(currentName.toUpperCase()+'!'); // adds current name to call array in a different format which is___________________
  }
  return call; // new array
}


function longPlaneteerCalls(words) {
  let calls = [];
  let output = false; // set output to always false unless something changes
  let wordsLength = words.length; // getting length of 1st array
  for (let i = 0; i < wordsLength; i++) { // started loop
    let word = words[i]; // got item individually
    if (word.length != 4) { // check if word is != 4
      output = true; // which make output true
    } 
  }
  return output;
}


function findTheCheese (foods) {
  var cheeses = ["gouda", "cheddar", "camembert"]; // made an array of cheeses
  var foodsLength = foods.length; // assigned the .length of foods (dont know length of food thats y start anoth loop)
  var output = "no cheese!"; // assigned string to output
  for (let i = 0; i < foodsLength; i++) { // start loop
    var food = foods[i]; // got food item
    for (let j = 0; j < cheeses.length; j++) { // started 2nd loop b/c we have 2 arrays w/diff lengths *( )
      var cheese = cheeses[j]; // itemized cheese
      if (food == cheese) { // check if food is cheese 
        return cheese; // returns cheese immed checks for cheese & returns ASAP
      } 
    }
  }
  return output; // after running loop, if cheese is NOT returned, returns output = no cheese!
}



