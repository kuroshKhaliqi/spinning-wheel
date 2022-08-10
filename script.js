let btnElement = document.getElementById("btn");
let spinElement = document.getElementById("wheel");
let closePopUpButton = document.getElementById("close");
let popUpElement = document.getElementById("popUp");
let questionElement = document.getElementById("question");
let questions = [
  "What is 2+2?",
  "What is the capital of Indian?",
  "What is 500 * 500?",
  " What is 6 X 6?",
  "Which is bigger 3 tons or 8000lbs?",
  "What is 500 x 400 - 5 x 2?",
  "Which is the biggest continent?",
  "What is the population of earth?",
];
closePopUpButton.onclick = closePopUp;
function closePopUp() {
  popUpElement.style.display = "none";
}
let random;
function onSpin() {
  random = Math.random() * 5000;
  random = Math.floor(random);
  spinElement.style.transform = "rotate(" + random + "deg)";
  spinElement.style.transition = "all 5s ease-out";
  console.log(random);
  let number = (random % 360) / 45;
  console.log(number);

  spinElement.ontransitionend = displayQuestion;
}
function displayQuestion() {
  let number = Math.ceil((((random % 360) + 25) / 45) % 8);
  console.log(number);

  popUpElement.style.display = "flex";
  questionElement.innerText = questions[number];
}
