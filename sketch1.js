let ratio;
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
    '<img src="assets/tv_remote.png", alt="tv_remote">',);
  noLoop();
  cursor('assets/HR.png');
}

function draw() {
  background("#D9DDE9");
  image(img01, 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image(img02, 0 * ratio, 558 * ratio);
  image(img03, 1143 * ratio, 558 * ratio);
  image(img04, 526 * ratio, 531 * ratio);
  image(img05, 823 * ratio, 495 * ratio);
  image(img1, 171 * ratio, 297 * ratio);
  image(img2, 1280 * ratio, 297 * ratio);
  image(img3, 769 * ratio, 180 * ratio);
  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 *ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
  let x = frameCount;
  fill("black");
  ellipse(800 * ratio, 864 * ratio, 46 * ratio, 18 * ratio);
}

function doubleClicked(img10) {
  loop();
}
function doubleClicked(img11) {
  loop();
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}