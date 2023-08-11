'use strict';



let username = prompt('What is your name?');


confirm(`Welcome ${username}. Let's do a quiz. How much do you know about me?`);


function quiz(){
  // Question1
  let response1_feedback = 'You didn\'t answer...';

  let response1 = prompt('Did I grow up in the Seattle area?').toLowerCase();
  // console.log(response1);

  if (response1 === 'y' || response1 === 'yes'){
    response1_feedback = 'Wow! Nice job!';
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
  } else if (response5 === 'n' || response5 === 'no'){
    response5_feedback = 'Sorry. Incorrect.';
  } else {
    response5_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response5_feedback)
  alert(response5_feedback);

  // Question6


  let attemptcount = 0;
  let response6 = 0;
  while (response6 !== 2 && attemptcount < 4){
    let response6 = Number(prompt('Now guess how many dogs I have.'));
    console.log(response6);

    if (response6 === 2){
      alert('You got it!');
      break;
    } else if (response6 > 2){
      alert(`Too high. Guess again. Try ${attemptcount}/4`);
    } else if (response6 < 2){
      alert(`Too low. Guess again. Try ${attemptcount}/4`);
    } else {
      alert(`That's not a real number. Guess again. Try ${attemptcount}/4`);
    }
    attemptcount++;
  }
  if (attemptcount === 4){
    alert('I have two dogs. Well, technically they are my father in law\'s');
  }

  alert(`${username}, thank you for taking my quiz. I hope you learned a little bit about me.`);
}

quiz();




// Did I grow up in the Seattle area?
// Did I go to university?
// Did I work in a hospital?
// Or did I work in mortages?
// Do I have any children?
