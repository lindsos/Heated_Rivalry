let ratio;
let img07;
let img10;
let img11;
let img12;
var All_the_Things_She_Said;

function preload() {
  img07 = loadImage("/assets/episode_4/episode_4_background.png");
  img10 = loadImage("assets/episode_4/gif_10.png");
  img11 = loadImage("assets/episode_4/gif_11.png");
  img12 = loadImage("assets/episode_4/gif_12.png");
  All_the_Things_She_Said = loadSound("assets/episode_4/all_the_things_she_said_heated_rivalry_version_tatu_harrison.mp3");
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
  background("#F5FDFF");
  image(img07, 0 * ratio, 0 *ratio, 1440 * ratio, 1024 *ratio);
  image(img10, 910 * ratio, 620 * ratio);
  image(img11, 770 * ratio, 585 * ratio);
  image(img12, 1150 * ratio, 540 * ratio);
  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 *ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");

  if (mouseIsPressed) {
  if (All_the_Things_She_Said.isPlaying() == false) {
  console.log("play!");
  All_the_Things_She_Said.play();
  }
  }
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}