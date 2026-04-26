let ratio;
let img07;
let img10;
let img11;
let img12;
var All_the_Things_She_Said;

function preload() {
  img07 = loadImage("assets/episode_4/episode_4_background.png");
  //img07 = loadImage("assets/episode_4/episode_4_background.png");
  img10 = loadImage("assets/episode_4/gif_10.png");
  img11 = loadImage("assets/episode_4/gif_11.png");
  img12 = loadImage("assets/episode_4/gif_12.png");
  All_the_Things_She_Said = loadSound(
    "assets/episode_4/all_the_things_she_said_heated_rivalry_version_tatu_harrison.mp3",
  );
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
  //background("#F5FDFF");
  image(img07, 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image(img10, 910 * ratio, 620 * ratio);
  if (mouseX > 800 && mouseX < 1010 && mouseY > 545 && mouseY < 661) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(795, 540, 220, 125);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("You want to make", 900, 605);
    text("me a tuna melt?", 900, 625);
  }

  image(img11, 770 * ratio, 585 * ratio);
  if (mouseX > 675 && mouseX < 780 && mouseY > 512 && mouseY < 712) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(672, 510, 112, 205);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("They say", 730, 595);
    text("you're", 730, 615);
    text("boring too.", 730, 635);
  }

  image(img12, 1150 * ratio, 540 * ratio);
  if (mouseX > 1010 && mouseX < 1140 && mouseY > 470 && mouseY < 645) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(1005, 470, 140, 180);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Have a", 1075, 545);
    text("fry, Shane", 1075, 565);
    text("Hollander.", 1075, 585);
  }

  link1.position(5 * ratio, 90 * ratio);
  link11.position(0 * ratio, -30 * ratio);
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
