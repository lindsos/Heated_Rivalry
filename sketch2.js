let img16;
let img17;
let img18;
let img19;
var backgrounds = [];
let index = 0;

function preload() {
  img16 = loadImage("assets/episode_2/gif_4.png");
  img17 = loadImage("assets/episode_2/gif_5.png");
  img18 = loadImage("assets/episode_2/gif_6.png");
  img19 = loadImage("assets/tv_remote.png");
  backgrounds[0] = loadImage("assets/episode_2/episode_2_background.png");
  backgrounds[1] = loadImage("assets/episode_2/episode_2_background_2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  link = createA("index.html", "Return to home");
}

function draw() {
  background("#111C45");
  image(backgrounds[index], 0, 75, 700, 425);
  textSize(12);
  textAlign(CENTER);
  fill("white");
  text("Never in life have", 560, 100);
  text("I blushed, Russians", 560, 110);
  text("do not do this.", 560, 120);
  text("You will", 115, 110);
  text("murder me.", 115, 120);
  text("Mr. Business Man,", 365, 440);
  text("Mr. Landlord.", 365, 450);
  noStroke();
  fill("#111C45");
  rect(505, 75, 110, 60);
  image(img16, 505, 75, 110, 60);
  image(img17, 75, 75, 95, 70);
  image(img18, 315, 400, 115, 70);
  image(img19, 30, 10, 35, 35);
  link.position(10, 45);
  link.style("font-size", "10px");
  link.style("text-align", "CENTER");
  link.style("text-style", "NORMAL");
  link.style("color", "white");
  link.style("text-decoration", "none");
  link.style("font-family", "helvetica-neue-lt-pro");
}

function mousePressed() {
  index = index + 1;
  if (index == backgrounds.length) {
    index = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
