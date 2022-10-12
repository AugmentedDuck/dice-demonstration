let terninger = new Array(300); //Number of starting dice
let newDice = 100; //Number of dice added or removed with buttons
let roll = 0; //Numbers of rolls made
let dataTable = []; //Stores the number of dice in each step

function setup() {
  createCanvas(windowWidth, windowHeight); //creates a canvas scaled to the window
  for (i = 0; i < terninger.length; i++) {
    terninger[i] = int(random(1, 7)); //All dice gets a random value from 1-6
  }
}

function draw() {
  background(200); //Sets background color
  displayText();
  displayButtons();
}

function displayText(){
  textAlign(CENTER);

  //If the text is to long to show in the window, it scales it down + it's the dice values 1-6
  if ((width * 1.1) / terninger.length < 24) {
    textSize((width * 1.1) / terninger.length);
    text("Dice Values:\n" + terninger, width / 2, 100);
  } else {
    textSize(24); //Minimum size
    text("Dice Values:\n" + terninger, width / 2, 100);
  }
  //Same as above + it's the amount of dice from each step
  if ((width * 0.55) / dataTable.length < 24) {
    textSize((width * 0.55) / dataTable.length);
    text("Archive number of dice:\n" + dataTable, width / 2, 200);
  } else {
    textSize(24); //Minimum size
    text("Archive number of dice:\n" + dataTable, width / 2, 200);
  }

  textSize(24);
  text("Number of dice:\n" + terninger.length, width / 2, 300); //
}

function displayButtons(){
  //Button to do one step
  let reRollButton = createButton("REROLL NUMBER: " + roll);
  reRollButton.position(width / 2 + 5, height / 2);
  reRollButton.size(100, 100);
  reRollButton.mousePressed(reRoll);
  //Button to repeat until all dice disappear
  let autoButton = createButton("AUTO ROLL");
  autoButton.position(width / 2 - 105, height / 2);
  autoButton.size(100, 100);
  autoButton.mousePressed(autoRoll);
  //Button to add dice
  let addButton = createButton("ADD 100 DICE");
  addButton.position(width / 2 + 5, height / 2 + 105);
  addButton.size(100, 100);
  addButton.mousePressed(addDice);
  //Button to remove dice
  let removeButton = createButton("REMOVE 100 DICE");
  removeButton.position(width / 2 - 105, height / 2 + 105);
  removeButton.size(100, 100);
  removeButton.mousePressed(removeDice);
}

function reRoll() {
  //Gives all dice a random number from 1-6
  for (i = 0; i < terninger.length; i++) {
    terninger[i] = int(random(1, 7));
    //Removes dice that landed on 6
    if (terninger[i] == 6) {
      terninger = shorten(terninger);
    }
  }
  append(dataTable, terninger.length); //Counts the amount of dice left and adds it to the archive

  roll++; //Counts the amount of rolls
}

function autoRoll() {
  //Repeats the reroll until all dice are gone
  while (terninger.length > 0) {
    reRoll();
  }
}

function addDice(){
  //Adds "newDice" amount of dice
  for(i = 0; i < newDice; i++){
    append(terninger, int(random(1, 7)));
  }
}

function removeDice(){
  //Removes "newDice" amount of dice
  for(i = 0; i < newDice; i++){
    shorten(terninger);
  }
}