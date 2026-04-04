let img16;
let img17;
let img18;
let img19;
var backgrounds = ["background1", "background2"];
var currentImage;

function preload() {
  img16 = loadImage("gif_4.png");
  img17 = loadImage("gif_5.png");
  img18 = loadImage("gif_6.png");
  img19 = loadImage("tv_remote.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  link = createA("index.html", "Return to home");
  background1 = loadImage("episode_2_background.png");
  background2 = loadImage("episode_2_background_2.png");
  currentImage = "background1";
}

function draw() {
  background("#111C45");
  image(currentImage, 0, 75, 700, 425);
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
  link.position(40, 55); 
  link.style('font-size', '10px');
  link.style('color', 'white');
  link.style('z-index', '5'); 
  link.style('text-decoration', 'none'); 
  link.style('font-family', 'helvetica-neue-lt-pro');
  image(img19, 25, 10, 35, 35);
}

function mousePressed() {
  if (backgrounds == 0) {
    currentImage = "background1";
    console.log("background1");
  } else if ("background2" == 1) {
    currentImage = "background2";
    console.log("background2");
  } else {
    currentImage = "background1";
    backgrounds = -1;
  }
  backgrounds = backgrounds + 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}