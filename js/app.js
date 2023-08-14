'use strict';



let username = prompt('What is your name?');
let scorecount = 0;

function getName(){
  confirm(`Welcome ${username}. Let's do a quiz. How much do you know about me?`);
}

getName();


function question1(){

  let response1_feedback = 'You didn\'t answer...';
  let response1 = prompt('Did I grow up in the Seattle area?').toLowerCase();

  if (response1 === 'y' || response1 === 'yes'){
    response1_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response1 === 'n' || response1 === 'no'){
    response1_feedback = 'Sorry. Incorrect.';
  } else {
    response1_feedback = 'Sorry. I do not understand.';
  }
  alert(response1_feedback);
}

question1();

function question2(){
  let response2_feedback = 'You didn\'t answer...';
  let response2 = prompt('Did I go to university?').toLowerCase();

  if (response2 === 'y' || response2 === 'yes'){
    response2_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response2 === 'n' || response2 === 'no'){
    response2_feedback = 'Sorry. Incorrect.';
  } else {
    response2_feedback = 'Sorry. I do not understand.';
  }
  alert(response2_feedback);
}

question2();



function question3(){
  let response3_feedback = 'You didn\'t answer...';
  let response3 = prompt('Did I work in a hospital?').toLowerCase();

  if (response3 === 'y' || response3 === 'yes'){
    response3_feedback = 'Sorry. Incorrect.';
  } else if (response3 === 'n' || response3 === 'no'){
    response3_feedback = 'Wow! Nice job!';
    scorecount++;
  } else {
    response3_feedback = 'Sorry. I do not understand.';
  }
  alert(response3_feedback);
}

question3();


function question4(){
  let response4_feedback = 'You didn\'t answer...';
  let response4 = prompt('Or did I work in mortages?').toLowerCase();

  if (response4 === 'y' || response4 === 'yes'){
    response4_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response4 === 'n' || response4 === 'no'){
    response4_feedback = 'Sorry. Incorrect.';
  } else {
    response4_feedback = 'Sorry. I do not understand.';
  }
  alert(response4_feedback);
}

question4();



function question5(){
  let response5_feedback = 'You didn\'t answer...';
  let response5 = prompt('Do I have any children?').toLowerCase();

  if (response5 === 'y' || response5 === 'yes'){
    response5_feedback = 'Wow! Nice job!';
    scorecount++;
  } else if (response5 === 'n' || response5 === 'no'){
    response5_feedback = 'Sorry. Incorrect.';
  } else {
    response5_feedback = 'Sorry. I do not understand.';
  }
  alert(response5_feedback);
}

question5();


function question6(){
  let attemptcountq6 = 0;
  let response6 = 0;
  while (response6 !== 2 && attemptcountq6 < 4){
    let response6 = Number(prompt('Guess how many dogs I have.'));

    if (response6 === 2){
      alert('You got it!');
      scorecount++;
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
}


question6();


function question7(){
  let attemptcountq7 = 0;
  const numberlotto = [Math.floor(Math.random() * (50 - 1) + 1), Math.floor(Math.random() * (50 - 1) + 1), Math.floor(Math.random() * (50 - 1) + 1)];
  question7:
  while (attemptcountq7 < 6){
    let guess = Number(prompt(`Guess a number from 1 through 50. There are three random ones generated. ${attemptcountq7+1}/6`));

    for (const thing of numberlotto){
      if (guess === thing){
        alert('You got one!');
        scorecount++;
        break question7;
      }
    }
    attemptcountq7++;
  }

  alert(`The numbers were ${numberlotto[0]}, ${numberlotto[1]}, and ${numberlotto[2]}.`);

  alert(`${username}, thank you for taking my quiz. You got ${scorecount}/7 questions correct. I hope you learned a little bit about me.`);
}


question7();
