'use strict';



let username = prompt('What is your name?');

function welcomebanner(){
  document.write('Welcome, ' + username + '. So glad you found this place.');
}


confirm('A quiz. How much do you know about me?');


function quiz(){
  // Question1
	let response1_feedback = "You didn't answer...";
	
	let response1 = prompt('Did I grow up in the Seattle area?');
  let response1_lower = response1.toLowerCase();
  console.log(response1_lower);
    
  if (response1_lower == 'y' || response1_lower == 'yes'){
    response1_feedback = 'Wow! Nice job!';
  } else if (response1_lower == 'n' || response1_lower == 'no'){
    response1_feedback = 'Sorry. Incorrect.';
  } else {
    response1_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response1_feedback)
  alert(response1_feedback)

    // Question2
	let response2_feedback = "You didn't answer...";
	
	let response2 = prompt('Did I go to university?');
  let response2_lower = response2.toLowerCase();
  console.log(response2_lower);
    
  if (response2_lower == 'y' || response2_lower == 'yes'){
    response2_feedback = 'Wow! Nice job!';
  } else if (response2_lower == 'n' || response2_lower == 'no'){
    response2_feedback = 'Sorry. Incorrect.';
  } else {
    response2_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response2_feedback)
  alert(response2_feedback)

  // Question3
	let response3_feedback = "You didn't answer...";
	
	let response3 = prompt('Did I work in a hospital?');
  let response3_lower = response3.toLowerCase();
  console.log(response3_lower);
    
  if (response3_lower == 'y' || response3_lower == 'yes'){
    response3_feedback = 'Sorry. Incorrect.';
  } else if (response3_lower == 'n' || response3_lower == 'no'){
    response3_feedback = 'Wow! Nice job!';
  } else {
    response3_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response3_feedback)
  alert(response3_feedback)

  // Question4
	let response4_feedback = "You didn't answer...";
	
	let response4 = prompt('Or did I work in mortages?');
  let response4_lower = response4.toLowerCase();
  console.log(response4_lower);
    
  if (response4_lower == 'y' || response4_lower == 'yes'){
    response4_feedback = 'Wow! Nice job!';
  } else if (response4_lower == 'n' || response4_lower == 'no'){
    response4_feedback = 'Sorry. Incorrect.';
  } else {
    response4_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response1_feedback)
  alert(response4_feedback)

  // Question5
	let response5_feedback = "You didn't answer...";
	
	let response5 = prompt('Do I have any children?');
  let response5_lower = response5.toLowerCase();
  console.log(response5_lower);
    
  if (response5_lower == 'y' || response5_lower == 'yes'){
    response5_feedback = 'Wow! Nice job!';
  } else if (response5_lower == 'n' || response5_lower == 'no'){
    response5_feedback = 'Sorry. Incorrect.';
  } else {
    response5_feedback = 'Sorry. I do not understand.';
  }
  // console.log(response5_feedback)
  alert(response5_feedback)
}





// Did I grow up in the Seattle area?
// Did I go to university?
// Did I work in a hospital?
// Or did I work in mortages?
// Do I have any children?
