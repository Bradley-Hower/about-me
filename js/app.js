'use strict';



let username = prompt('What is your name?');


confirm(`Welcome ${username}. Let's do a quiz. How much do you know about me?`);


function quiz(){
  let scorecount = 0;
  // Question1
  let response1_feedback = 'You didn\'t answer...';

  let response1 = prompt('Did I grow up in the Seattle area?').toLowerCase();
  // console.log(response1);

  if (response1 === 'y' || response1 === 'yes'){
    response1_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response1 === 'n' || response1 === 'no'){
    response1_feedback = 'Sorry. Incorrect.';
  } else {
    response1_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response1_feedback)
  alert(response1_feedback);

  // Question2
  let response2_feedback = 'You didn\'t answer...';

  let response2 = prompt('Did I go to university?').toLowerCase();
  // console.log(response2);

  if (response2 === 'y' || response2 === 'yes'){
    response2_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response2 === 'n' || response2 === 'no'){
    response2_feedback = 'Sorry. Incorrect.';
  } else {
    response2_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response2_feedback)
  alert(response2_feedback);

  // Question3
  let response3_feedback = 'You didn\'t answer...';

  let response3 = prompt('Did I work in a hospital?').toLowerCase();
  // console.log(response3);

  if (response3 === 'y' || response3 === 'yes'){
    response3_feedback = 'Sorry. Incorrect.';
  } else if (response3 === 'n' || response3 === 'no'){
    response3_feedback = 'Wow! Nice job!';
    scorecount++;
  } else {
    response3_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response3_feedback)
  alert(response3_feedback);

  // Question4
  let response4_feedback = 'You didn\'t answer...';

  let response4 = prompt('Or did I work in mortages?').toLowerCase();
  // console.log(response4);

  if (response4 === 'y' || response4 === 'yes'){
    response4_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response4 === 'n' || response4 === 'no'){
    response4_feedback = 'Sorry. Incorrect.';
  } else {
    response4_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response1_feedback)
  alert(response4_feedback);

  // Question5
  let response5_feedback = 'You didn\'t answer...';

  let response5 = prompt('Do I have any children?').toLowerCase();
  // console.log(response5);

  if (response5 === 'y' || response5 === 'yes'){
    response5_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response5 === 'n' || response5 === 'no'){
    response5_feedback = 'Sorry. Incorrect.';
  } else {
    response5_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response5_feedback)
  alert(response5_feedback);

  // Question6


  let attemptcountq6 = 0;
  let response6 = 0;
  while (response6 !== 2 && attemptcountq6 < 4){
    let response6 = Number(prompt('Guess how many dogs I have.'));
    // console.log(response6);

    if (response6 === 2){
      alert('You got it!');
      scorecount++;
      // console.log(scorecount);
      break;
    } else if (response6 > 2){
      if (attemptcountq6 < 3){
        alert(`Too high. Guess again. Try ${attemptcountq6+1}/4`);
      } else {
        alert('I have two dogs. Although, technically they are my father-in-law\'s.');
      }
    } else if (response6 < 2){
      if (attemptcountq6 < 3){
        alert(`Too low. Guess again. Try ${attemptcountq6+1}/4`);
      } else {
        alert('I have two dogs. Although, technically they are my father-in-law\'s');
      }
    } else {
      if (attemptcountq6 < 3){
        alert(`That's not a real number. Guess again. Try ${attemptcountq6+1}/4`);
      } else {
        alert('I have two dogs. Although, technically they are my father-in-law\'s.');
      }
    }
    attemptcountq6++;
  }

  // Question 7
  let attemptcountq7 = 0;
  question7:
  while (attemptcountq7 < 6){
    let guess = prompt(`Guess a color. There are three significant ones. ${attemptcountq7}/6`).toLowerCase();
    // console.log(guess);
    const favoritethings = ['red', 'white', 'blue'];
    for (const thing of favoritethings){
      // console.log(thing);
      if (guess === thing){
        alert('You got one!');
        scorecount++;
        break question7;
      }
    }
    attemptcountq7++;
  }
  alert('The colors are red, white, and blue. The colors of my home, the US.');


  alert(`${username}, thank you for taking my quiz. You got ${scorecount}/7 questions correct. I hope you learned a little bit about me.`);
}


quiz();




// Did I grow up in the Seattle area?
// Did I go to university?
// Did I work in a hospital?
// Or did I work in mortages?
// Do I have any children?
