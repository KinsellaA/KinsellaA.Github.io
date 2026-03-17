// Complete variable definitions and random functions
// alert 
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters =  ["Willy the Goblin","Big Daddy","Father Christmas" ]
// Willy the Goblin
// Big Daddy
// Father Christmas

const places = ["the soup kitchen","Disneyland","the White House"]
// the soup kitchen
// Disneyland
// the White House

const events = ["spontaneously combusted", "melted into a puddle on the sidewalk","turned into a slug and slithered away"]
// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function

function returnRandomStoryString() {
    const randonCharater  = randomValueFromArray(characters);
    const randomplace = randomValueFromArray(places);
    const randomevent = randomValueFromArray(events);
  let storyText = "It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day."
  storyText = storyText.replaceall(":insertx:", randonCharater)
  storyText = storyText.replaceall(":insertx:",randomplace)
  storyText = storyText.replaceall(":insertx:",randomevent)
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
 //alert("in generateStory");
 let newstory = returnRandomStoryString();
  if (customName.value !== "") {
    const name = customName.value;
    newstory = newstory.replaceall("Bob",name);
  }
//alert("in newstory");
  if (document.getElementById("uk").checked) {
    //alert("uk Selected");
    const weight = Math.round(300/14.0);
    newstory = newstory.replaceall("300 pounds",weight);
    const temperature = Math.round((94 - 32)* 5.0/9.0)+ celsius;
    newstory = newstory.replaceall("94 Fahrenheit",temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}