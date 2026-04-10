let img30;

function preload() {
  img30 = loadImage('/assets/episode_5/episode_5_background.png');
}

function setup() {
  createCanvas(1600, 900);
  link1 = createA("index.html", "Return to home");
  link11 = createA(
    "index.html",
    '<img src="assets/tv_remote.png", alt="tv_remote">',
  );
  cursor('assets/HR.png');
}

function draw() {
  background("#a2def8");
  image (img30, 0, 0, 1600, 900);
  link1.position(60, 130);
  link11.position(70, 18);
  link11.style("transform", "scale(0.5)");
  link1.style("font-size", "20px");
  link1.style("text-align", "CENTER");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "helvetica-neue-lt-pro");
}