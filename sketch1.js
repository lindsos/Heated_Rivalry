let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;

function preload() {
  img7 = loadImage("assets/episode_1/episode_1_background.png");
  img8 = loadImage("assets/episode_1/hockey_net_left.png");
  img9 = loadImage("assets/episode_1/hockey_net_right.png");
  img10 = loadImage("assets/episode_1/shane.png");
  img11 = loadImage("assets/episode_1/ilya.png");
  img12 = loadImage("assets/episode_1/gif_1.png");
  img13 = loadImage("assets/episode_1/gif_2.png");
  img14 = loadImage("assets/episode_1/gif_3.png");
}

function setup() {
  createCanvas(1600, 900);
  link1 = createA("index.html", "Return to home");
  link11 = createA(
    "index.html",
    '<img src="assets/tv_remote.png", alt="tv_remote">',);
  noLoop();
  cursor('assets/HR.png');
}

function draw() {
  background("#D9DDE9");
  image(img7, 0, 0, 1600, 900);
  image(img8, 0, 558, 457, 342);
  image(img9, 1143, 558, 457, 342);
  image(img10, 526, 531, 274, 360);
  image(img11, 823, 495, 274, 396);
  textSize(24);
  textAlign(CENTER);
  fill("black");
  text("You will not", 274, 342);
  text("be so nice", 274, 360);
  text("when we beat", 274, 378);
  text("you.", 274, 396);
  text("Is lie. Liar", 1394, 378);
  text("told you this.", 1394, 396);
  text("Is", 820, 243);
  text("someone", 820, 261);
  text("chasing", 820, 279);
  text("you?", 820, 297);
  image(img12, 171, 297, 217, 171);
  image(img13, 1280, 297, 217, 171);
  image(img14, 769, 180, 100, 171);
  link1.position(60, 130);
  link11.position(70, 18);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
  let x = frameCount;
  fill("black");
  ellipse(800, 864, 46, 18);
}

function doubleClicked(img10) {
  loop();
}
function doubleClicked(img11) {
  loop();
}
