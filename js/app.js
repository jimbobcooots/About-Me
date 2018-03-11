'use strict';

function aboutMeQuiz () {
  var totalScore = 0;

  // Question 1
  function question1() {
    var countryGuess = prompt('Have I lived somewhere outside the United States? Please respond yes or no');

    if(countryGuess.toLowerCase() === 'yes') {
      console.log('For question #1 the user was correct');
      alert('You guessed right! I lived in Australia for 5 years.');
      return true;
    } else if (countryGuess.toLowerCase === 'no'){
      console.log('For question #1 the user was incorrect');
      alert('Incorrect, I lived in Australia for 5 years');
    } else {
      console.log('For question #1 the user did not answer');
      alert('You didn\'t answer! Oh well, onto the next question');
    }
  }

  if (question1() === true) {
    totalScore++;
  }

  //Question 2
  function question2() {
    var siblingGuess = parseInt(prompt('How many siblings do I have?'));

    if(siblingGuess === 1) {
      alert('You got it! I have a younger brother that\'s 17 years old');
      console.log('For question #2 the user was correct');
      return true;
    } else if (siblingGuess > 1) {
      console.log('For question #2 the user was incorrect');
      alert ('Too high, I have one younger brother.');
    } else if (siblingGuess < 1) {
      console.log('For question #2 the user was incorrect');
      alert ('Nope! I have one younger brother.');
    } else {
      console.log('For question #2 the user did not answer');
      alert('You didn\'t answer! Oh well, onto the next question');
    }
  }

  if (question2() === true) {
    totalScore++;
  }

  //Question 3
  function question3() {
    var dunkGuess = prompt('Have I dunked a basketball?');

    if(dunkGuess) {
      dunkGuess = dunkGuess.toLowerCase();
    }

    if(dunkGuess === 'yes' || dunkGuess === 'y') {
      console.log('For question #3 the user was correct');
      alert('You are correct, though it\'s been a few years...');
      return true;
    } else if (dunkGuess === 'no' || dunkGuess === 'n') {
      console.log('For question #3 the user was incorrect');
      alert('Believe it or not I have! I have video evidence to prove it.');
    } else {
      console.log('For question #3 the user did not answer');
      alert ('You didn\'t answer! Oh well, onto the next question');
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

    if(kangarooBite === 'yes' || kangarooBite === 'y') {
      console.log('For question #4 the user was correct');
      alert('No, but I was bitten by a Quokka which is like a miniature version of a kangaroo');
      return true;
    } else if (kangarooBite === 'no' || kangarooBite === 'n') {
      console.log('For question #4 the user was incorrect');
      alert('Correct, I wouldn\'t go near one, they\'re strong as hell!');
    } else {
      console.log('For question #3 the user did not answer');
      alert ('You didn\'t answer! Oh well, onto the next question');
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

    if(alligatorGame === 'yes' || alligatorGame === 'no') {
      console.log('For question #5 the user was correct');
      alert('Hell no! I did it in Louisiana, alligators don\'t live in Australia, duh!');
      return true;
    } else if (alligatorGame === 'no' || alligatorGame === 'n') {
      console.log('For question #5 the user was incorrect');
      alert('You\'re right, but I did in Louisiana, good times out in the bayou');
    } else {
      console.log('For question #3 the user did not answer');
      alert ('You didn\'t answer! Oh well, onto the next question');
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

  //Question 7
  function question7() {
    var questionCount = 6;
    var marsupials = ['Koala', 'Kangaroo', 'Platypus', 'Wallaby', 'Wombat'];
    while (questionCount > 0) {
      var marsupGuess = prompt('Name a type of marsupial');
      if (marsupGuess === null) {
        alert ('Too bad you didn\'t answer! We\'re all out of questions!');
        break;
      }
      for (var i = 0; i < marsupials.length; i++) {
        if (marsupGuess.toLowerCase() === marsupials[i].toLowerCase()) {
          alert ('correct');
          console.log('For question #7 the user was correct');
          return true;
        }
      }
      if (questionCount === 6) {
        console.log('For question #7 the user was incorrect');
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

//Inspiration from code review
//DOM manipulation for returning the score
//questions were put into an array;
// Math.floor and Math.random are for random number generation
//Math.random generates a random number between 0 and 1 Math.floor rounds down to get a whole number .style.display
//lets apply ^^ to question 6








