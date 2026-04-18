let ratio;
let sunHeight = 1440;
let redVal = 0;
let greenVal = 0;
let img09;
let img18;

function preload() {
  img09 = loadImage('/assets/episode_6/episode_6_background.png');
  img18 = loadImage('/assets/episode_6/gif_18.png');
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
  cursor('assets/HR.png');
}

function draw() {
  background(redVal * ratio, greenVal * ratio, 0 * ratio);
  noStroke();
  fill(255, 135, 5, 60);
  circle(720 * ratio, sunHeight * ratio, 180 * ratio);
  fill(255, 100, 0, 100);
  circle(720 * ratio, sunHeight * ratio, 140 * ratio);
  if (sunHeight > 130) {
    sunHeight -= 2;
  if (sunHeight < 480) {
    redVal += 4;
    greenVal += 1;
  }
}
  console.log(sunHeight);
  image(img09, 0 * ratio, 77 * ratio, 1440 * ratio, 947 * ratio);
  image (img18, 800 * ratio, 825 * ratio);
  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 * ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
}

  if (mouseIsPressed===true && sunHeight === 130) {
    background(0);
  }


function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}