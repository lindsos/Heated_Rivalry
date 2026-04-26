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
  ratio = (windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);
  link1 = createA("index.html", "Return to home");
  link11 = createA(
    "index.html",
    '<img src="assets/tv_remote.png", alt="tv_remote">',
  );
  cursor("assets/HR.png");
}

function draw() {
  //background("#111C45");
  image(backgrounds[index], 0 * ratio, 0 * ratio, 1440 * ratio, 1024 * ratio);
  image(img4, 1154 * ratio, 110 * ratio);
    if (mouseX > 1010 && mouseX < 1190 && mouseY > 96 && mouseY < 173) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(1005, 95, 190, 80);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Never in life have", 1100, 115);
    text("I blushed, Russians", 1100, 135);
    text("do not do this.", 1100, 155);
  }

  image(img5, 171 * ratio, 75 * ratio);
    if (mouseX > 150 && mouseX < 365 && mouseY > 65 && mouseY < 210) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(150, 65, 218, 145);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("You will", 260, 130);
    text("murder me.", 260, 150);
  }

  image(img6, 650 * ratio, 800 * ratio);
    if (mouseX > 565 && mouseX < 785 && mouseY > 700 && mouseY < 845) {
    isHovering = true;
  } else {
    isHovering = false;
  }
  if (isHovering) {
    noStroke();
    fill(0, 150);
    rect(569.5, 700.5, 218, 145);
    fill('white')
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Mr. Business Man,", 680, 760);
    text("Mr. Landlord.", 680, 780);
  }
  
  link1.position(5 * ratio, 90 * ratio);
  link11.position(0 * ratio, -30 * ratio);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "white");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");

  //frameRate(12);
  //textSize(24);
  //text("X: "+mouseX, 200, 100);
  //text("Y: "+mouseY, 50, 200);

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