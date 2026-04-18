let ratio;
let img4;
let img5;
let img6;
var backgrounds = [];
let index = 0;

function preload() {
  img4 = loadImage("assets/episode_2/gif_4.png");
  img5 = loadImage("assets/episode_2/gif_5.png");
  img6 = loadImage("assets/episode_2/gif_6.png");
  backgrounds[0] = loadImage("assets/episode_2/episode_2_background.png");
  backgrounds[1] = loadImage("assets/episode_2/episode_2_background_2.png");
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
  background("#111C45");
  image(backgrounds[index], 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image(img4, 1154 * ratio, 110 * ratio);
  image(img5, 171 * ratio, 75 * ratio);
  image(img6, 650 * ratio, 800 * ratio);
  link1.position(60 * ratio, 130 * ratio);
  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 *ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
}

function mousePressed() {
  index = index + 1;
  if (index == backgrounds.length) {
    index = 0;
  }
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}