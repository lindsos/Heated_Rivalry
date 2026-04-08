let img36;

function preload() {
  img36 = loadImage('/assets/episode_6/episode_6_background.png');
}

function setup() {
  createCanvas(1600, 900);
}

function draw() {
  background("#fce8bd");
  image(img36, 0, 68, 1600, 832);
}
