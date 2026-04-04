let img1;
let img2;
let img3;
let img4;
let img5;
let img6;

function preload() {
  img1 = loadImage("assets/episode_1/episode_1.png");
  img2 = loadImage("assets/episode_2/episode_2_background.png");
  img3 = loadImage("assets/episode_3/episode_3_background.png");
  img4 = loadImage("assets/episode_4/episode_4_background.png");
  img5 = loadImage("assets/episode_5/episode_5_background.png");
  img6 = loadImage("assets/episode_6/episode_6_background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  link1 = createA("index1.html", "EPISODE 1- ROOKIES");
  link2 = createA("index2.html", "EPISODE 2- OLYMPIANS");
  link3 = createA("index3.html", "EPISODE 3- HUNTER");
  link4 = createA("index4.html", "EPISODE 4- ROSE");
  link5 = createA("index5.html", "EPISODE 5- ILL BELIEVE IN ANYTHING");
  link6 = createA("index6.html", "EPISODE 6- THE COTTAGE");
}

function draw() {
  background("white");

  //title
  textSize(120);
  textAlign(CENTER);
  fill("black");
  text("HEATED RIVALRY", 350, 105);
  textFont("zuume-cut");
  textStyle(BOLD);

  //episode 1
  link1.position(25, 270);
  link1.style("font-size", "10px");
  link1.style("text-align", "LEFT");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "zumme");
  noStroke();
  fill("#D9DDE9");
  rect(25, 125, 190, 140);
  image(img1, 25, 130, 190, 135);

  //episode 2
  link2.position(250, 270);
  link2.style("font-size", "10px");
  link2.style("text-align", "LEFT");
  link2.style("text-style", "NORMAL");
  link2.style("color", "black");
  link2.style("text-decoration", "none");
  link2.style("font-family", "zumme");
  noStroke();
  fill("#111C45");
  rect(250, 125, 190, 140);
  image(img2, 250, 140, 190, 125);

  //episode 3
  link3.position(475, 270);
  link3.style("font-size", "10px");
  link3.style("text-align", "LEFT");
  link3.style("text-style", "NORMAL");
  link3.style("color", "black");
  link3.style("text-decoration", "none");
  link3.style("font-family", "zumme");
  noStroke();
  fill("#163355");
  rect(475, 125, 190, 140);
  image(img3, 475, 125, 190, 140);

  //episode 4
  link4.position(25, 460);
  link4.style("font-size", "10px");
  link4.style("text-align", "LEFT");
  link4.style("text-style", "NORMAL");
  link4.style("color", "black");
  link4.style("text-decoration", "none");
  link4.style("font-family", "zumme");
  noStroke();
  fill("#F5FDFF");
  rect(25, 315, 190, 140);
  image(img4, 25, 315, 190, 140);

  //episode 5
  link5.position(250, 460);
  link5.style("font-size", "10px");
  link5.style("text-align", "LEFT");
  link5.style("text-style", "NORMAL");
  link5.style("color", "black");
  link5.style("text-decoration", "none");
  link5.style("font-family", "zumme");
  noStroke();
  fill("#A3DEF8");
  rect(250, 315, 190, 140);
  image(img5, 250, 315, 190, 140);

  //episode 6
  link6.position(475, 460);
  link6.style("font-size", "10px");
  link6.style("text-align", "LEFT");
  link6.style("text-style", "NORMAL");
  link6.style("color", "black");
  link6.style("text-decoration", "none");
  link6.style("font-family", "zumme");
  noStroke();
  fill("#FDE9BD");
  rect(475, 315, 190, 140);
  image(img6, 475, 325, 190, 130);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
