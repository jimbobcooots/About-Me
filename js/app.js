'use strict';
// make all questions non-case sensitive
// fix console log order issues, because some of my questions aren't console logging in order
// solve any efficiency issues and complete JS stretch goals

function aboutMeQuiz () {
  var totalScore = 0;

  // Question 1
  function question1() {
    var countryGuess = prompt('Have I lived somewhere outside the United States? Please respond yes or no');

    if(countryGuess.toLowerCase() === 'yes') {
      console.log('For question #1 the user was correct');
      alert('Ye, Australia mate');
      return true;
    } else if (countryGuess.toLowerCase === 'no'){
      console.log('For question #1 the user was incorrect');
      alert('Nah, Australia mate');
    } else {
      console.log('For question #1 the user did not answer');
      alert('You didn\'t answer!');
    }
  }

  if (question1() === true) {
    totalScore++;
  }

  //Question 2
  function question2() {
    var yearsGuess = parseInt(prompt('How many years did I live in Australia? Integers only'));

    if(yearsGuess === 5) {
      alert('That is correct!');
      console.log('For question #2 the user was correct');
      return true;
    } else if (yearsGuess > 5) {
      console.log('For question #2 the user was incorrect');
      alert ('Actually it was 5 years!');
    } else if (yearsGuess < 5) {
      console.log('For question #2 the user was incorrect');
      alert ('Actually it was 5 years!');
    }
    else {
      console.log('For question #2 the user did not answer');
      alert('You didn\'t answer!');
    }
  }

  if (question2() === true) {
    totalScore++;
  }

  //Question 3
  function question3() {
    var surfingWaves = prompt('Did I catch a wave while surfing? Please respond yes or no');

    if(surfingWaves) {
      surfingWaves = surfingWaves.toLowerCase();
    }

    if(surfingWaves === 'yes') {
      console.log('For question #3 the user was correct');
      alert('As much as I\'d like to say getting up for two seconds counts, I can\'t two seconds');
      return true;
    } else {
      console.log('For question #3 the user was incorrect');
      alert('Went surfing on five different occasions, ended up eating saltwater every time');
    }
  }

  if (question3() === true) {
    totalScore++;
  }

  //Question 4
  function question4() {
    var kangarooBite = prompt('Have I ever been bitten by a kangaroo?');

    if(kangarooBite) {
      kangarooBite = kangarooBite.toLowerCase();
    }

    if(kangarooBite === 'yes') {
      console.log('For question #4 the user was correct');
      alert('No, but I was bitten by a Quokka which is like a miniature version of a kangaroo');
      return true;
    } else {
      console.log('For question #4 the user was incorrect');
      alert('Correct, I wouldn\'t go near one, they\'re strong as hell!');
    }
  }

  if (question4() === true) {
    totalScore++;
  }

  //Question 5
  function question5() {
    var alligatorGame = prompt('Did I ever toy with an alligator in Australia by dangling a long string in front of it?');

    if(alligatorGame) {
      alligatorGame = alligatorGame.toLowerCase();
    }

    if(alligatorGame === 'yes') {
      console.log('For question #5 the user was correct');
      alert('Hell no! I did it in Louisiana, alligators don\'t live in Australia, duh!');
      return true;
    } else {
      console.log('For question #5 the user was incorrect');
      alert('You\'re right, but I did in Louisiana, good times out in the bayou');
    }
  }

  if (question5() === true) {
    totalScore++;
  }

  //Question 6
  function question6 () {
    for (var count = 0; count < 4; count++) {

      var pointsGuess = parseInt(prompt('How many points did Wilt Chamberlain score in a game?'));

      var counterAlert = 3 - count;

      if (pointsGuess === 100) {
        alert ('correct');
        console.log('For question #6 the user was correct');
        return true;
      } else if (pointsGuess < 100) {
        alert ('too low '+ counterAlert + ' attempt(s) left');
      } else if (pointsGuess > 100) {
        alert ('too high '+ counterAlert + ' attempt(s) left');
      } else {
        alert ('You did not guess, you have ' + counterAlert + ' attempt(s) left');
      }

    }
    if (count === 4) {
      console.log('For question #6 the user was incorrect');
    }
  }

  if (question6() === true) {
    totalScore++;
  }

  //Question 7: Name a type of marsupial
  function question7() {
    var questionCount = 7;
    var marsupials = ['Koala', 'Kangaroo', 'Platypus', 'Wallaby', 'Wombat'];
    while (questionCount > 0) {
      var marsupGuess = prompt('Name a type of marsupial');

      for (var i = 0; i < marsupials.length; i++) {
        if (marsupGuess === marsupials[i]) {
          alert ('correct');
          console.log('For question #7 the user was correct');
          return true;
        }
      }

      var indicator = questionCount -1;
      alert ('Incorrect ' + indicator + ' questions left');

      questionCount--;
    }
  }

  if (question7() === true) {
    totalScore++;
  }

  if (totalScore > 4) {
    alert ('Congratulations! You received '+ totalScore + ' out of 7 total points. You\'re a certified genius!');
  } else if (totalScore < 4) {
    alert ('You received ' + totalScore + ' out of 7 total points. Eh that\'s alright');
  } else {
    alert ('You received ' + totalScore + ' out of 7 total points. You can do better than that!');
  }
}

aboutMeQuiz();









