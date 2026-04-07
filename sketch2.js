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
  createCanvas(1600, 900);
  link = createA("index.html", "Return to home");
}

function draw() {
  background("#111C45");
  image(backgrounds[index], 0, 135, 1600, 765);
  textSize(24);
  textAlign(CENTER);
  fill("white");
  text("Never in life have", 1280, 180);
  text("I blushed, Russians", 1280, 198);
  text("do not do this.", 1280, 216);
  text("You will", 263, 198);
  text("murder me.", 263, 216);
  text("Mr. Business Man,", 834, 792);
  text("Mr. Landlord.", 834, 810);
  noStroke();
  fill("#111C45");
  rect(1154, 135, 251, 108);
  image(img16, 1154, 135, 251, 108);
  image(img17, 171, 135, 217, 126);
  image(img18, 720, 720, 263, 126);
  image(img19, 61, 18, 80, 63);
  link.position(15, 81);
  link.style("font-size", "20px");
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