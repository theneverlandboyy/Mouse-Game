

let randomGridNumber;
let score = 0, maxScore = 5;
let lives = 5, maxTries = 5;

function startGame() {
  // Hide the "squeekey" by adding a CSS class
  document.getElementById("squeekeyHeader").classList.remove("hide");

  // Add click event listeners to each grid item
  document.querySelectorAll(".grid-items").forEach((element) => {
    element.addEventListener("click", handleClick);
  });

  generateSqueekey();
}

function handleClick(event) {
  const clickedItem = event.target;

  if (clickedItem.id === 'squeekey') {
    increaseScore();
    clickedItem.innerHTML = "";
    clearGridItems();
  }
  generateSqueekey();
}

function increaseScore() {
  score += 1;
  updateScoreTracker();

  if (score >= maxScore) {
    console.log("Player has won!");
    alert("Thank you for helping me catch Squeekey!");
  }
}

function clearGridItems() {
  document.querySelectorAll(".grid-items").forEach((element) => {
    element.innerHTML = "";
  });
}

function generateSqueekey() {
  const previousGridItem = document.getElementById("squeekey");

  // Clear the previous "squeekey" if it exists
  if (previousGridItem) {
    previousGridItem.innerHTML = "";
  }

  // Generate a new random number and display the "squeekey"
  randomGridNumber = Math.floor(Math.random() * 15) + 1;
  document.getElementById("grid" + randomGridNumber).innerHTML = `<div id="squeekey"></div>`;
}

function updateScoreTracker() {
  const scoreTracker = document.getElementById("scoreTracker");
  scoreTracker.innerHTML = "Score: " + score;

}
function resetScore() {
  score = 0;
  updateScoreTracker();
}

// Add event listener to the reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetScore);

updateScoreTracker();
startGame();
