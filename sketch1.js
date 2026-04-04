let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13; 
let img14;
let img15;

function preload() {
  img7 = loadImage('assets/episode_1/episode_1_background.png');
  img8 = loadImage('assets/episode_1/hockey_net_left.png');
  img9 = loadImage('assets/episode_1/hockey_net_right.png');
  img10 = loadImage('assets/episode_1/shane.png');
  img11 = loadImage('assets/episode_1/ilya.png');
  img12 = loadImage ('assets/episode_1/gif_1.png');
  img13 = loadImage ('assets/episode_1/gif_2.png');
  img14 = loadImage ('assets/episode_1/gif_3.png');
  img15 = loadImage ('assets/tv_remote.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  link = createA("index.html", "Return to home");
  noLoop();
}

function draw() {
  background('#D9DDE9');
  image (img7, 0, 0, 700, 500);
  image (img8, 0, 310, 200, 190);
  image (img9, 500, 310, 200, 190);
  image (img10, 230, 295, 120, 200);
  image (img11, 360, 275, 120, 220);
  textSize (12);
  textAlign (CENTER);
  fill ('black');
  text ('You will not', 120, 190);
  text ('be so nice', 120, 200);
  text ('when we beat', 120, 210);
  text ('you.', 120, 220);
  text ('Is lie. Liar', 610, 210);
  text ('told you this.', 610, 220);
  text ('Is', 360, 135);
  text ('someone', 360, 145);
  text ('chasing', 360, 155);
  text ('you?', 360, 165);
  image (img12, 75, 165, 95, 95);
  image (img13, 560, 165, 95, 95);
  image (img14, 330, 100, 55, 95);
  image (img15, 30, 10, 35, 35);
  link.position(10, 45);
  link.style("font-size", "10px");
  link.style("text-align", "LEFT");
  link.style("text-style", "NORMAL");
  link.style("color", "black");
  link.style("text-decoration", "none");
  link.style("font-family", "helvetica-neue-lt-pro");
  let x = frameCount;
  fill ('black');
  ellipse (350, 480, 20, 10);
}
function doubleClicked(img10) {
  loop();
}
function doubleClicked(img11) {
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}