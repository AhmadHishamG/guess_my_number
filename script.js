'use strict';
// console.log(document.querySelector('.message').textContent); //we can select elements from html in java script just like css does and we use this method querySelector which is in the object method to do just that and we need to pass inside it a selector and like this we selected the .message element in our case and since its a class we use . before it and if it was an id we would have used the hash this is basically the first dom manipulation that you did and we selected the .textContent of this message
// document.querySelector('.message').textContent = '🎉Correct Number!  '; //This will change the text Start guessing to 🎉 Correct Number! This is considered dom manipulation by the way as we manipulated one of the elements (message)one of the DOM nodes.textContent must be written like this as its case senseitive v.i
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13; //here i have to use the textContent as the element contains more stuff then just text that i can manipulate
// document.querySelector('.score').textContent = 10; //There are also other ways of selecting elements that we will talk about in the next project
// //Lets now do DOM manipulation o the input field
// console.log(document.querySelector('.guess').value); //if we want to get the input value now we read the value property instead of textcontent we can also manipulate the displayed input value itself
// document.querySelector('.guess').value = 23; // now we see the value 23 displayed in the input section and we can delete it just like any input field

//This is the first time our code will react to something happening in the DOM and for that we will need an event listener now an event is something that happens on the page for example a mouse click or a mouse moving or any key press etc
//We want to check whether the check button is pressed or not in our case

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Resetiing the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20; //finished score
  document.querySelector('.number').textContent = '?'; //finished hidden number
  document.querySelector('.guess').value = ''; //finished guess (here we have to use .value as its an input field)
  // document.querySelector('.message').textContent = 'Start guessing...'; //restored message refactored
  displayMessage(`Start guessing...`);
  document;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // while (guess != secretNumber) {
  //comment while loop out for now A.H
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `⛔No number!`;//refactored
    displayMessage(`⛔No number!`);
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!  ';//refac displaymessage
    displayMessage('🎉Correct Number! ');

    document.querySelector('body').style.backgroundColor = '#60b347'; // here we wrote just body without dot before it as we are just writing the element name not a class and we also write (style.backgroundColor) using Camel case notation not like css written like this style.background-color and we use camel case in mostly everything in JAVA
    document.querySelector('.number').style.width = '30rem'; // this has to be a string when specifying width with its unit. cannot be just a number
    document.querySelector('.number').textContent = secretNumber; //Thats how we set any image inside a website

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📉Too low!';refactored displaymessage
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game';refac displaymessage
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c80e0eff';
    }
  }
  //This code was refactored and removed to remove repetition
  //when guess is higher then valid number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is lower then valid number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low!';
  //     score--; //this is better way
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //} //A.H while loop
  //document.querySelector('.message').textContent = '🎉Correct Number!  ';
}); //here we will use the check class not btn as btn is generic and applies to several buttons on the screen and the check class inherits from it that its a btn and as before this will return an element and now we can call the addEventlistener method there are other methods to listen to events in java script but .addEventListener in java script is the most used one we need to pass inside it the type of the event and in this case it is just a simple click. the addEventListener function is a special function as it expects EventHandler function as a 2nd argument and what the EventHandler function does is that does the reaction to this event. Remember that functions in JS are just values thats why they can be passed as arguments to a function and in our case function is the event handler and we can also manipulate elements in this event handler
//remember how that usually whenever we get an input from the display it is usually a string thats why we need to convert it to a Number in order to compare it to the correct random number in the future
//in applications like these we usually always check first if there is no input
