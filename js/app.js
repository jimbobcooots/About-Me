'use strict';
function gameQuiz() {
  var score = 0

  // //Question 1
function question1() {
var foreignCountry = prompt('Have I lived somewhere outside the United States? Please respond yes or no');

if(foreignCountry) {
  foreignCountry = foreignCountry.toLowerCase();
}

if(foreignCountry === 'yes') {
  alert('Ye, Australia mate');
  console.log('For question #1 the user responded ' + foreignCountry + ' and was correct')
  return true; 
} else {
  alert('Nah, Australia mate');
  console.log('For question #1 the user responded ' + foreignCountry + ' and was incorrect')
}
}
if (question1() === true ) {
  score +=1;
}

// //Question 2
function question2() {
var yearsInOz = parseInt(prompt('How many years did I live in Australia? Integers only'));

if(yearsInOz === 5) {
  alert('That is correct!')
  console.log('For question #2 the user responded ' + yearsInOz + ' and was correct');
  return true;
} else {
  alert('Nah, five years');
  console.log('For question #2 the user responded ' + yearsInOz + ' and was incorrect')
}
}
if (question2() === true ) {
  score +=1;
}
// //Question 3
function question3() {
var surfingWaves = prompt('Did I catch a wave while surfing? Please respond yes or no');

if(surfingWaves) {
  surfingWaves = surfingWaves.toLowerCase();
}

if(surfingWaves === 'yes') {
  alert('As much as I\'d like to say getting up for two seconds counts, I can\'t two seconds');
  console.log('For question #3 the user responded ' + surfingWaves + ' and was correct');
  return true;
} else {
  alert('Went surfing on five different occasions, ended up eating saltwater every time');
  console.log('For question #3 the user responded ' + surfingWaves + ' and was incorrect');
}
}
if (question3() === true ) {
  score +=1;
}
// //Question 4
function question4(){
var kangarooBite = prompt('Have I ever been bitten by a kangaroo?');

if(kangarooBite) {
  kangarooBite = kangarooBite.toLowerCase();
}

if(kangarooBite === 'yes') {
  alert('No, but I was bitten by a Quokka which is like a miniature version of a kangaroo');
  console.log('For question #4 the user responded ' + kangarooBite + ' and was correct');
  return true;
} else {
  alert('Correct, I wouldn\'t go near one, they\'re strong as hell!');
  console.log('For question #4 the user responded ' + kangarooBite + ' and was incorrect');
}
}
if (question4() === true ) {
  score +=1;
}
// //Question 5
function question5() {
var alligatorGame = prompt('Did I ever toy with an alligator in Australia by dangling a long string in front of it?');

if(alligatorGame) {
  alligatorGame = alligatorGame.toLowerCase();
}

if(alligatorGame === 'yes') {
  alert('Hell no! I did it in Louisiana, alligators don\'t live in Australia, duh!');
  console.log('For question #4 the user responded ' + alligatorGame + ' and was correct');
  return true;
} else {
  alert('You\'re right, but I did in Louisiana, good times out in the bayou');
  console.log('For question #4 the user responded ' + alligatorGame + ' and was incorrect');
}
}
if (question5() === true ) {
  score +=1;
}
function numberOfPoints () {
  for (var count = 4; count > 0; count--) {
  
    var pointsGuess = parseInt(prompt('How many points did Wilt Chamberlain score in a game?'));
  
    if (pointsGuess === 100) {
      alert ('correct');
       return true;
    } else if (pointsGuess < 100) {
      alert ('too low');
    } else {
      alert ('too high');
    }
    
    if (count < 1) {
      alert ('You ran out tries, you stink!');
    }
  }
 }
//Question 7: ?
// array of countries I have visited needs to be added to this function
function question7() {
  / function countryMusic() {
      var questionCount = 6;
      var musicArray = ['Zac Brown Band', 'Blake Shelton', 'Keith Urban', 'Carrie Underwood'];
      while (questionCount > 0) {
        var countryGuess = prompt('Which country artists do I like?');
    
        for (var i = 0; i < musicArray.length; i++) {
          if (countryGuess === musicArray[i]) {
            alert ('correct');
            questionCount = 0;
            return true;
          }
        }
    
        var indicator = questionCount -1;
        alert ('Incorrect ' + indicator + ' questions left');
    
        questionCount--;
      }
    }
    
    }
