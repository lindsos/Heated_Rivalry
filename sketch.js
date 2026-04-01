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
  createCanvas(700, 500);
}

function draw() {
  background("white");

  //title
  textSize(75);
  textAlign(CENTER);
  fill("black");
  text("HEATED RIVALRY", 350, 85);

  //episode 1
  textAlign(LEFT);
  textSize(10);
  fill("black");
  text("EPISODE 1- ROOKIES", 25, 275);
  noStroke();
  fill("#D9DDE9");
  rect(25, 125, 190, 140);
  image(img1, 25, 130, 190, 135);

  //episode 2
  textAlign(LEFT);
  textSize(10);
  fill("black");
  text("EPISODE 2- OLYMPIANS", 250, 275);
  noStroke();
  fill("#111C45");
  rect(250, 125, 190, 140);
  image(img2, 250, 140, 190, 125);

  //episode 3
  textAlign(LEFT);
  textSize(10);
  fill("black");
  text("EPISODE 3- HUNTER", 475, 275);
  noStroke();
  fill("#163355");
  rect(475, 125, 190, 140);
  image(img3, 475, 125, 190, 140);

  //episode 4
  textAlign(LEFT);
  textSize(10);
  fill("black");
  text("EPISODE 4- ROSE", 25, 465);
  noStroke();
  fill("#F5FDFF");
  rect(25, 315, 190, 140);
  image(img4, 25, 315, 190, 140);

  //episode 5
  textAlign(LEFT);
  textSize(10);
  fill("black");
  text("EPISODE 5- ILL BELIEVE IN ANYTHING", 250, 465);
  noStroke();
  fill("#A3DEF8");
  rect(250, 315, 190, 140);
  image(img5, 250, 315, 190, 140);

  //episode 6
  textAlign(LEFT);
  textSize(10);
  fill("black");
  text("EPISODE 6- THE COTTAGE", 475, 465);
  noStroke();
  fill("#FDE9BD");
  rect(475, 315, 190, 140);
  image(img6, 475, 325, 190, 130);
}
