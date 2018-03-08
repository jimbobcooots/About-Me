'use strict';


// //Question 1
var foreignCountry = prompt('Have I lived somewhere outside the United States? Please respond yes or no');

if(foreignCountry) {
  foreignCountry = foreignCountry.toLowerCase();
}

if(foreignCountry === 'yes') {
  alert('Ye, Australia mate');
  console.log('For question #1 the user responded ' + foreignCountry + ' and was correct') 
} else {
  alert('Nah, Australia mate');
  console.log('For question #1 the user responded ' + foreignCountry + ' and was incorrect')
}

// //Question 2
var yearsInOz = parseInt(prompt('How many years did I live in Australia? Integers only'));

if(yearsInOz === 5) {
  alert('That is correct!')
  console.log('For question #2 the user responded ' + yearsInOz + ' and was correct');
} else {
  alert('Nah, five years');
  console.log('For question #2 the user responded ' + yearsInOz + ' and was incorrect')
}

// //Question 3
var surfingWaves = prompt('Did I catch a wave while surfing? Please respond yes or no');

if(surfingWaves) {
  surfingWaves = surfingWaves.toLowerCase();
}

if(surfingWaves === 'yes') {
  alert('As much as I\'d like to say getting up for two seconds counts, I can\'t two seconds');
  console.log('For question #3 the user responded ' + surfingWaves + ' and was correct');
} else {
  alert('Went surfing on five different occasions, ended up eating saltwater every time');
  console.log('For question #3 the user responded ' + surfingWaves + ' and was incorrect');
}

// //Question 4
var kangarooBite = prompt('Have I ever been bitten by a kangaroo?');

if(kangarooBite) {
  kangarooBite = kangarooBite.toLowerCase();
}

if(kangarooBite === 'yes') {
  alert('No, but I was bitten by a Quokka which is like a miniature version of a kangaroo');
  console.log('For question #4 the user responded ' + kangarooBite + ' and was correct');
} else {
  alert('Correct, I wouldn\'t go near one, they\'re strong as hell!');
  console.log('For question #4 the user responded ' + kangarooBite + ' and was incorrect');
}

// //Question 5
var alligatorGame = prompt('Did I ever toy with an alligator in Australia by dangling a long string in front of it?');

if(alligatorGame) {
  alligatorGame = alligatorGame.toLowerCase();
}

if(alligatorGame === 'yes') {
  alert('Hell no! I did it in Louisiana, alligators don\'t live in Australia, duh!');
  console.log('For question #4 the user responded ' + alligatorGame + ' and was correct');
} else {
  alert('You\'re right, but I did in Louisiana, good times out in the bayou');
  console.log('For question #4 the user responded ' + alligatorGame + ' and was incorrect');
}

//Question 7: Which countries have I visited?
// array of countries I have visited needs to be added to this function
var questionCount = 6;

var countries = ['Thailand', 'Australia', 'France', 'Spain'];

while (questionCount > 0) {
	var countryGuess = prompt('Which countries have I visited');

	questionCount--;

	for (var i = 0; i < countries.length; i++) {
	
		if (countryGuess === countries[i]) {
			alert('Correct');
			questionCount = -1;
			break;
	
		}  
	}
		if (questionCount > 0) {
		  alert ('You have ' + questionCount + ' number of guesses left');
		}
		
		if (questionCount === 0) {
		  alert('You\'re out of guesses');
    }
}
