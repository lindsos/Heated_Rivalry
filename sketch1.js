let ratio;
let isHovering = false;
var puckX = 630;
let img01;
let img02;
let img03;
let img04;
let img05;
let img1;
let img2;
let img3;

function preload() {
  img01 = loadImage("assets/episode_1/episode_1_background.png");
  img02 = loadImage("assets/episode_1/hockey_net_left.png");
  img03 = loadImage("assets/episode_1/hockey_net_right.png");
  img04 = loadImage("assets/episode_1/shane.png");
  img05 = loadImage("assets/episode_1/ilya.png");
  img1 = loadImage("assets/episode_1/gif_1.png");
  img2 = loadImage("assets/episode_1/gif_2.png");
  img3 = loadImage("assets/episode_1/gif_3.png");
}

function setup() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);
  link1 = createA("index.html", "Return to home");
  link11 = createA(
    "index.html",
    '<img src="assets/tv_remote.png", alt="tv_remote">',
);
  cursor("assets/HR.png");
}

function draw() {
  //background("#D9DDE9");
  
  image(img01, 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image(img02, 0 * ratio, 700 * ratio);
  image(img03, 1050 * ratio, 700 * ratio);
  image(img04, 450 * ratio, 650 * ratio);
  image(img05, 750 * ratio, 615 * ratio);

  fill ('black');
  ellipse (630, 875, 40, 20);

  image(img1, 135 * ratio, 297 * ratio);
  if (mouseX > 120 && mouseX < 260 && mouseY > 320 && mouseY < 435) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(115, 258, 210, 180);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("You will not", 220, 330);
    text("be so nice when", 220, 350);
    text("we beat you.", 220, 370);
  }

  image(img2, 1100 * ratio, 280 * ratio);
  if (mouseX > 975 && mouseX < 1170 && mouseY > 245 && mouseY < 550) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(965, 244, 210, 210);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Is lie. Liar", 1075, 340);
    text("told you this.", 1075, 360);
  }

  image(img3, 675 * ratio, 200 * ratio);
    if (mouseX > 590 && mouseX < 693 && mouseY > 175 && mouseY < 365) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(594, 175, 101, 190);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Is", 645, 240);
    text("someone", 645, 260);
    text("chasing", 645, 280);
    text("you?", 645, 300);
  }

  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 * ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");


if (mouseIsPressed) {
  shanescore();
  ilyascore();
}


function shanescore() {
  if (mouseX > 450 && mouseX < 580 && mouseY >  550 && mouseY < 845) {
    mouseIsPressed = true;
  } else {
    mouseIsPressed = false;
  }
  if (mouseIsPressed) {
  fill ('black');
  ellipse (puckX, 875, 40, 20); 
  puckX = puckX + 15
}
}

function ilyascore() {
    if (mouseX > 750 && mouseX < 845 && mouseY > 525 && mouseY < 845) {
    mouseIsPressed = true;
  } else {
    mouseIsPressed = false;
  }
  if (mouseIsPressed) {
  fill ('black');
  ellipse (puckX, 875, 40, 20);
  puckX = puckX - 15
}
}
}


function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}
