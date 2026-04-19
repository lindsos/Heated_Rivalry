let ratio;
let sunHeight = 1000;
let redVal = 0;
let greenVal = 0;
let img09;
let img16;
let img17;
let img18;

function preload() {
  img09 = loadImage("assets/episode_6/episode_6_background.png");
  img16 = loadImage("assets/episode_6/gif_16.png");
  img17 = loadImage("assets/episode_6/gif_17.png");
  img18 = loadImage("assets/episode_6/gif_18.png");
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
  background(redVal * ratio, greenVal * ratio, 0 * ratio);
  noStroke();
  fill(255, 135, 5, 60);
  circle(870 * ratio, sunHeight * ratio, 180 * ratio);
  fill(255, 100, 0, 100);
  circle(870 * ratio, sunHeight * ratio, 140 * ratio);
  if (sunHeight > 130) {
    sunHeight -= 2;
    if (sunHeight < 480) {
      redVal += 4;
      greenVal += 1;
    }
  }
  image(img09, 0 * ratio, 77 * ratio, 1440 * ratio, 947 * ratio);
  image(img16, 450 * ratio, 175 * ratio);
  if (mouseX > 395 && mouseX < 565 && mouseY > 150 && mouseY < 325) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    fill(0, 150);
    rect(385, 145, 190, 187);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Stupid", 480, 220);
    text("Canadian", 480, 240);
    text("wolf bird.", 480, 260);
  }

  image(img17, 145 * ratio, 640 * ratio);
  if (mouseX > 120 && mouseX < 300 && mouseY > 555 && mouseY < 735) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    fill(0, 150);
    rect(120, 552, 147, 187);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Ya tebya", 193, 635);
    text("lyublyu.", 193, 655);
  }

  image(img18, 800 * ratio, 825 * ratio);
  if (mouseX > 700 && mouseX < 875 && mouseY > 720 && mouseY < 885) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    fill(0, 150);
    rect(695, 715, 185, 175);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Since rookie year.", 790, 785);
    text("(The summer", 790, 805);
    text("before).", 790, 825);
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

  if (mouseIsPressed === true && sunHeight === 130) {
    background(0);
  }

  //frameRate(12);
  //textSize(24);
  //text("X: "+mouseX, 200, 100);
  //text("Y: "+mouseY, 50, 200);
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);
}
