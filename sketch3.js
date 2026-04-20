let ratio;
let img06;
let img7;
let img8;
let img9;
let lights = [];

function preload() {
  img06 = loadImage("assets/episode_3/episode_3_background.png");
  img7 = loadImage("assets/episode_3/gif_7.png");
  img8 = loadImage("assets/episode_3/gif_8.png");
  img9 = loadImage("assets/episode_3/gif_9.png");
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
  for (i = 1; i < 150; i++) {
    lights.push({
      x: random(1440),
      y: random(1024),
      s: random(1 / 2),
    });
  }
}

function draw() {
  //background("#163355");
  image(img06, 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  for (i = 1; i <= 4; i++) {}
  for (i = 0; i < lights.length; i++) {
    lights[i].s = (lights[i].s % 5) + 0.15;
    stroke("#FFFFDD");
    strokeWeight(lights[i].s);
    fill("white");
    ellipse(lights[i].x, lights[i].y, 5);
  }
  noStroke();
  image(img7, 650 * ratio, 90 * ratio);
      if (mouseX > 568 && mouseX < 695 && mouseY > 80 && mouseY < 265) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(560, 75, 140, 195);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Just a", 630, 115);
    text("bunch of", 630, 135);
    text("very decent", 630, 155);
    text("smoothies", 630, 175);
    text("with deeply", 630, 195);
    text("stupid", 630, 215);
    text("names.", 630, 235);
  }

  image(img8, 403 * ratio, 350 * ratio);
      if (mouseX > 350 && mouseX < 575 && mouseY > 310 && mouseY < 440) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(345, 300, 230, 152);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Blue moon", 460, 365);
    text("over Brooklyn.", 460, 385);
  }


  image(img9, 875 * ratio, 270 * ratio);
      if (mouseX > 765 && mouseX < 930 && mouseY > 235 && mouseY < 450) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(762, 235, 170, 220);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("He deserves", 850, 315);
    text("sunshine. And", 850, 335);
    text("so do you.", 850, 355);
  }

  link1.position(5 * ratio, 0 * ratio);
  link11.position(0 *ratio, 0 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");

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