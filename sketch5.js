let ratio;
let xpos = 2; 
let xspeed = 2; 
let img08;
let img14;

function preload() {
  img08 = loadImage('/assets/episode_5/episode_5_background.png');
  img14 = loadImage('/assets/episode_5/gif_14.png');
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
  background("#a2def8");
  image (img08, 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image (img14, 375 * ratio, 575 * ratio);
  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 * ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
  noStroke();
  fill('white'); 
  ellipse(xpos, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +20, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +40, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +400, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +420, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +440, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +800, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +820, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +840, 170 * ratio, 100 * ratio, 50 * ratio);
  
  ellipse(xpos +200, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +220, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +240, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +600, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +620, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +640, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +1000, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +1020, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos +1040, 70 * ratio, 100 * ratio, 50 * ratio);
  bounce(); 
}

function bounce() {
  
    if (xpos > width) {
    xspeed = -2;
  }
  if (xpos < 1) {
    xspeed = 2;
  }

  xpos += xspeed;
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}