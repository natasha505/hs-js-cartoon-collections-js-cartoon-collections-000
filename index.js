function dwarfRollCall(dwarves) {
  var numberedNames = "";
  for (var i = 0; i < dwarves.length; i++) {
    numberedNames += (i+1).toString() + ". " + dwarves[i] + " "; 
  }
  return numberedNames;
}

function summonCaptainPlanet(planeteerCalls) {
  var call = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    var currentCall = planeteerCalls[i];
    call.push(currentCall.toUpperCase() + "!");
  }
  return call;
}

function longPlaneteerCalls(words) {
  var shortWord = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4 ) {
      shortWord = true;
    }
  }
  return shortWord;
}

function findTheCheese(foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++) {
    for (var j = 0; j < cheeses.length; j++) {
      if (foods[i] === cheeses[j])
      return foods[i];
    }
  }
  return "no cheese!";
}

// words= ["airplane", "boat", "car", "barge"]
// "airplane".startsWith("b") => false
// "boat".startsWith("b") => true
function wordsWithB(words) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("b") === true) {
      newArray.push(words[i]); 
    }
  }
  console.log(newArray)
  return newArray; // => [ "boat", "barge" ]
}

wordsWithB(["airplane", "boat"])


