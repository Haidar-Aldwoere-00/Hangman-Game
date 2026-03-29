// Latter
const latters = "abcdefghijklmnopqrstuvwxyz";
// Get Array From Latters
let lattersArray = Array.from(latters.toUpperCase());
//Select Latters Container
let latterContainer = document.querySelector(".latters");
//Generate Latters
lattersArray.forEach((latter) => {
  // Creat Span
  let span = document.createElement("span");
  //Creat Latte Text Node
  let theLatter = document.createTextNode(latter);
  span.appendChild(theLatter);
  //Add Class On Span
  span.className = "latter-box";
  //Append Span To The Latters Container
  latterContainer.appendChild(span);
});
//Object Of Word + Categories
let word = {};
async function loadGameData() {
  try {
    let response = await fetch("/Word.Json");
    word = await response.json();
    startGame();
  } catch (error) {
    console.error("w", error);
  }
}
function startGame() {
  // Get Random Property
  let allKeys = Object.keys(word);
  let randomPropNumber = Math.floor(Math.random() * allKeys.length);
  //Name To Categories
  let randomPropName = allKeys[randomPropNumber];
  //category Words
  let randomPropValue = word[randomPropName];
  let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
  let randomValueValue = randomPropValue[randomValueNumber];
  document.querySelector(".category span").innerHTML = ` ${randomPropName}`;
  console.log(randomValueValue);
  //Select Latter Guess Element
  let latterGuessContainer = document.querySelector(".latter-guess");
  let latterOfArray = Array.from(randomValueValue.toLowerCase());
  latterOfArray.forEach((latter) => {
    let span = document.createElement("span");
    latterGuessContainer.appendChild(span);
  });
  let guessSpan = document.querySelectorAll(".latter-guess span");
  //Set Wrong Attempts
  let wrongAttempts = 0;
  //Set correct Attempts
  let correctAttempts = 0;
  //Selcet The Draw Element
  let theDraw = document.querySelector(".hangman-draw");
  document.addEventListener("click", (e) => {
    //Set The Chose Status
    let theStatus = false;
    if (e.target.className === "latter-box") {
      e.target.classList.add("clicked");
      let theCklickedLatter = e.target.innerHTML.toLowerCase();
      latterOfArray.forEach((wordLatter, wordIndex) => {
        //
        if (theCklickedLatter == wordLatter) {
          //Set Status Correct
          theStatus = true;
          if (guessSpan[wordIndex].innerHTML === "") {
            guessSpan[wordIndex].innerHTML = wordLatter;
            correctAttempts++;
          }
          guessSpan.forEach((span, spanIndex) => {
            if (wordIndex === spanIndex) {
              span.innerHTML = wordLatter;
            }
          });
        }
      });

      //If Latter Is Wrong
      if (theStatus !== true) {
        wrongAttempts++;
        theDraw.classList.add(`wrong-${wrongAttempts}`);
        // Play Fail Sound
        document.getElementById("fail").play();
        if (wrongAttempts === 8) {
          endGame(randomValueValue);

          latterContainer.classList.add("finished");
        }
      } else {
        document.getElementById("success").play();
        //If All Input = The Word Hidden
        if (correctAttempts === latterOfArray.length) {
          winGame(randomValueValue);
          latterContainer.classList.add("finished");
        }
      }
    }
  });
}
//End Game Funciton
function endGame(word) {
  let div = document.createElement("div");
  let divText = document.createTextNode(`Game Over, The Word Is ${word}`);
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}

//Win Function Game
function winGame(word) {
  let div = document.createElement("div");
  let divText = document.createTextNode(`You Win! 🏆 The Word Is: ${word}`);
  div.appendChild(divText);
  div.className = "popup win";
  document.body.appendChild(div);
}

loadGameData();
