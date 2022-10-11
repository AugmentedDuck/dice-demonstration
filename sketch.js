let terninger = new Array(300);
let roll = 0;
let dataTable = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  reRoll();
}

function draw() {
  background(200);
  displayText();
  displayButtons();
}

function reRoll() {
  for (i = 0; i < terninger.length; i++) {
    terninger[i] = int(random(1, 7));

    if (terninger[i] == 6) {
      terninger = shorten(terninger);
    }
  }
  append(dataTable, terninger.length);

  roll++;
}

function autoRoll() {
  while (terninger.length > 0) {
    reRoll();
  }
}

function displayText(){
  textAlign(CENTER);

  if ((width * 1.1) / terninger.length < 24) {
    textSize((width * 1.1) / terninger.length);
    text(terninger, width / 2, 100);
  } else {
    textSize(24);
    text(terninger, width / 2, 100);
  }

  textSize(24);
  if ((width * 0.75) / dataTable.length < 24) {
    textSize((width * 0.75) / dataTable.length);
    text(dataTable, width / 2, 200);
  } else {
    textSize(24);
    text(dataTable, width / 2, 200);
  }
}

function displayButtons(){
  let reRollButton = createButton("REROLL NUMBER: " + roll);
  reRollButton.position(width / 2 + 5, height / 2);
  reRollButton.size(100, 100);
  reRollButton.mousePressed(reRoll);

  let autoButton = createButton("AUTO ROLL");
  autoButton.position(width / 2 - 105, height / 2);
  autoButton.size(100, 100);
  autoButton.mousePressed(autoRoll);
}
