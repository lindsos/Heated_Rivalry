let img30;

function preload() {
  img30 = loadImage('/assets/episode_5/episode_5_background.png');
}

function setup() {
  createCanvas(1600, 900);
}

function draw() {
  background("#a2def8");
  image (img30, 0, 0, 1600, 900);
}