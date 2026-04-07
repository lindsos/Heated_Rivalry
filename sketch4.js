let img25;
let img26;
let img27;
let img28;
let img29;
//var All_the_Things_She_Said;

function preload() {
  img25 = loadImage('/assets/episode_4/episode_4_background.png');
  img26 = loadImage('assets/episode_4/gif_10.png');
  //img27 = loadImage('assets/episode_4/gif_11.png');
  img28 = loadImage('assets/episode_4/gif_12.png');
  img29 = loadImage ('assets/tv_remote.png');
  //All_the_Things_She_Said = loadSound("assets/episode_4/All_The_Things_She_Said_Heated_Rivalry_Version_tATu_Harrison.mp3");
}


function setup() {
  createCanvas(1600, 900);
  link = createA("index.html", "Return to home");
}

function draw() {
  background("#F5FDFF");
  image (img25, 0, 0, 1600, 900);
  textSize (24);
  textAlign (CENTER);
  fill ('black');
  text('You want to make', 1045, 648);
  text('me tuna melt?', 1045, 666);
  //text('They say',365, 375);
  //text('youre', 365, 385);
  //text('boring too.', 365, 395);
  //fill ('white');
  text('Have a fry,', 1291, 531);
  text('Shane', 1291, 549);
  text('Hollander.', 1291, 567);
  image (img26, 949, 540, 240, 135);
  //image (img27, 200, 175, 95, 65);
  image (img28, 1200, 477, 171, 171);
  image(img29, 61, 18, 80, 63);
  link.position(15, 81);
  link.style("font-size", "20px");
  link.style("text-align", "CENTER");
  link.style("text-style", "NORMAL");
  link.style("color", "white");
  link.style("text-decoration", "none");
  link.style("font-family", "helvetica-neue-lt-pro");

  //if (mouseIsPressed) {
    //if (All_the_Things_She_Said.isPlaying() == false) {
      //console.log("play!");
      //All_the_Things_She_Said.play();
    //}
  //}
}