let img20;
let img21;
let img22;
let img23;
let lights = [];

function preload() {
  img20 = loadImage("assets/episode_3/episode_3_background.png");
  img21 = loadImage("assets/episode_3/gif_7.png");
  img22 = loadImage("assets/episode_3/gif_8.png");
  img23 = loadImage("assets/episode_3/gif_9.png");
}

function setup() {
  createCanvas(1600, 900);
  link1 = createA("index.html", "Return to home");
  link11 = createA(
    "index.html",
    '<img src="assets/tv_remote.png", alt="tv_remote">',
  );
  cursor('assets/HR.png');
  for (i = 1; i < 150; i++) {
    lights.push({
      x: random(1600),
      y: random(900),
      s: random(1 / 2),
    });
  }
}

function draw() {
  background("#163355");
  image(img20, 0, 0, 1600, 900);
  for (i = 1; i <= 4; i++) {}
  for (i = 0; i < lights.length; i++) {
    lights[i].s = (lights[i].s % 5) + 0.15;
    stroke("#FFFFDD");
    strokeWeight(lights[i].s);
    fill("white");
    ellipse(lights[i].x, lights[i].y, 5);
  }
  textSize(24);
  textAlign(CENTER);
  fill("white");
  noStroke();
  text("Just a bunch", 782, 145);
  text("of very", 782, 159);
  text("decent", 782, 177);
  text("smoothies", 783.5, 195);
  text("with", 782, 213);
  text("deeply", 782, 231);
  text("stupid", 782, 249);
  text("names.", 782, 267);
  text("Blue moon", 526, 378);
  text("over Brooklyn.", 526, 396);
  text("He", 1051, 342);
  text("deserves", 1051, 360);
  text("sunshine.", 1053, 378);
  text("And so", 1081.5, 396);
  text("do you.", 1105, 414);
  image(img21, 709, 90, 149, 200);
  image(img22, 423, 315, 217, 117);
  image(img23, 994, 270, 171, 171);
  link1.position(60, 130);
  link11.position(70, 18);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "white");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
}
