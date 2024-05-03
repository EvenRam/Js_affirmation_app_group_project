onReady();

function onReady() {
  console.log('Javascript is working!');
}

// create a function for makeFire
// create a function for makeIce
// write out command on HTML by adding the id= and onClick
// Declare a variable that would getElementById
// add innerHTML function to the variable
// use <span></span> to add fire and ice emoji 

function makeFire(){
  console.log(  'makeFire() works!' );
  let emojiDiv = document.getElementById('emojiDiv')
  emojiDiv.innerHTML += `
  <span>
  🔥
  </span>
  `
}

function makeIce(){
  console.log(  'makeIce() works!' );
  let emojiDiv = document.getElementById('emojiDiv')
  emojiDiv.innerHTML += `
  <span>
  ❄️
  </span>
  `
}

// Work on submit button
/*
add onClick to submit button √
add submit Function √
   prevent Default √
   selectors for the input using .value
   add clear from 
  
   add input to the DOM 

*/ 

function submitFunction() {
  console.log("submitFunction() works!")
  //event.preventDefault();
  let affirmationText = document.getElementById("affirmationInput").value
  let authorText = document.getElementById("authorInput").value
  console.log(`text check ${affirmationText}`)
  console.log(`author check ${authorText}`)
}
submitFunction();