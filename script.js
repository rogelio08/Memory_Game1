// global constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.4;
var guessCounter = 0;
var attempts = 3;

//functions to start/stop the game
function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    attempts = 3;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    generatePattern()
    playClueSequence()
}
function stopGame(){
    //reset the game variables
    gamePlaying = false;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function generatePattern(){
  for(let i = 0; i < pattern.length; i++){
    //posible ints range from [0, 5] + 1
    pattern[i] = getRandomInt(6) + 1;
  }
}


//functionsto call if user loses/wins or gets it wrong
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won! :D");
}
function incorrectGuess(){
  alert("That was wrong, please try again. " + attempts + " attempts remaining");
  //alert("Wrong, please try again");
}


// functions for lighting up buttons
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


//function to play a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    //playTone(btn,clueHoldTime);
    playTone(btn, (clueHoldTime - (progress * 40)));
    setTimeout(clearButton,(clueHoldTime - (progress * 40)),btn);
  }
}


//function to play a sequence of clues
function playClueSequence(){
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


//check the users guess
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress += 1;
        playClueSequence();
      }
    }
    else{
      guessCounter += 1;
    }
  }
  else{
    if(attempts > 0){
      attempts = attempts - 1;
      incorrectGuess();
      playClueSequence();
    }
    else{
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  //higher numbers mean higher pitches
  1: 250.6,
  2: 300.6,
  3: 350,
  4: 400.2,
  5: 450.4,
  6: 500.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)