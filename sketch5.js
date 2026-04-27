let ratio;
let xpos = 2;
let xspeed = 2;
let img08;
let img13;
let img14;
let img15;

function preload() {
  img08 = loadImage("assets/episode_5/episode_5_background.png");
  img13 = loadImage("assets/episode_5/gif_13.png");
  img14 = loadImage("assets/episode_5/gif_14.png");
  img15 = loadImage("assets/episode_5/gif_15.png");
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
  //background("#a2def8");
  image(img08, 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image(img13, 741.5 * ratio, 650 * ratio);
  if (mouseX > 650 && mouseX < 705 && mouseY > 577 && mouseY < 765) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(646, 565, 65, 215);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("I think", 678, 612);
    text("I like", 678, 632);
    text("you", 678, 652);
    text("maybe", 678, 672);
    text("a little", 678, 692);
    text("too", 678, 712);
    text("much.", 678, 732);
  }

  image(img14, 375 * ratio, 575 * ratio);
  if (mouseX > 325 && mouseX < 525 && mouseY > 503 && mouseY < 665) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(325, 500, 205, 172);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("You're looking", 425, 570);
    text("very pretty today.", 425, 590);
  }

  image(img15, 1000 * ratio, 750 * ratio);
  if (mouseX > 875 && mouseX < 965 && mouseY > 655 && mouseY < 850) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(873, 653, 92, 192);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("I'm", 920, 715);
    text("coming", 920, 735);
    text("to the", 920, 755);
    text("cottage.", 920, 775);
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
  noStroke();
  fill("white");
  ellipse(xpos - 400, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 420, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 440, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 800, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 820, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 840, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 1200, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 1220, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 1240, 170 * ratio, 100 * ratio, 50 * ratio);

  ellipse(xpos - 200, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 220, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 240, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 600, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 620, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 640, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 1000, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 1020, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos - 1040, 70 * ratio, 100 * ratio, 50 * ratio);

  ellipse(xpos, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 20, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 40, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 400, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 420, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 440, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 800, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 820, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 840, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 1200, 170 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 1220, 150 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 1240, 170 * ratio, 100 * ratio, 50 * ratio);

  ellipse(xpos + 200, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 220, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 240, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 600, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 620, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 640, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 1000, 70 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 1020, 50 * ratio, 100 * ratio, 50 * ratio);
  ellipse(xpos + 1040, 70 * ratio, 100 * ratio, 50 * ratio);
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
