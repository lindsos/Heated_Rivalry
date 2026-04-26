let ratio;

//here your images and labels are loaded into an array, so you can easily loop through them in the draw function and they can always be arranged together
let imgs = [];
let episodes = [
{
file: "assets/episode_1/episode_1.png",
url: "index1.html",
label: "EPISODE 1- ROOKIES",
},
{
file: "assets/episode_2/episode_2_background.png",
url: "index2.html",
label: "EPISODE 2- OLYMPIANS",
},
{
file: "assets/episode_3/episode_3_background.png",
url: "index3.html",
label: "EPISODE 3- HUNTER",
},
{
file: "assets/episode_4/episode_4_background.png",
url: "index4.html",
label: "EPISODE 4- ROSE",
},
{
file: "assets/episode_5/episode_5_background.png",
url: "index5.html",
label: "EPISODE 5- ILL BELIEVE IN ANYTHING",
},
{
file: "assets/episode_6/episode_6_background.png",
url: "index6.html",
label: "EPISODE 6- THE COTTAGE",
},
];

//Using the original design dimensions, variables are created to act as axes to put your images and labels on, so that they can be easily scaled together
//think of each image and label as a card

// these are 'constants' because they won't change, but you can adjust them to change the layout of your cards
const cols = [50, 525, 1000]; // x positions of each column
const rows = [300, 700]; // y positions of each row
const cardW = 385;
const cardH = 231;
const labelOffsetY = 20; // label below the card

//In preload, the images are loaded into the imgs array, so that they can be easily looped through in the draw function and they can always be arranged together
function preload() {
for (let ep of episodes) {
imgs.push(loadImage(ep.file));
}
}

function setup() {
const design_w = 1440;
const design_h = 1024;
ratio = min(windowWidth / design_w, windowHeight / design_h);
createCanvas(design_w * ratio, design_h * ratio);
cursor("assets/HR.png");
textFont("zuume-cut"); // set the font for the title and labels
}

function draw() {
background("#f0eee6");

// Title
push(); // this is used to isolate the title styling, so that it doesn't affect the labels
textSize(240 * ratio); //resize the title
textAlign(CENTER);
textStyle(BOLD);
fill("black");
noStroke();
text("HEATED RIVALRY", 725 * ratio, 200 * ratio); //position the title
pop(); // end of title styling

// This lays out your 'cards' in a grid, using the cols and rows arrays as axes, and the cardW and cardH variables to size the images, and the labelOffsetY variable to position the labels
for (let i = 0; i < 6; i++) {
let col = i % 3;
let row = floor(i / 3);
let x = cols[col] * ratio;
let y = rows[row] * ratio;
let w = cardW * ratio;
let h = cardH * ratio;

// Draw image scaled to card size
image(imgs[i], x, y, w, h);

// Draw label
fill("black");
noStroke();
textSize(20 * ratio);
textAlign(LEFT);
textStyle(NORMAL);
text(episodes[i].label, x, y + h + labelOffsetY * ratio);
}
}

//This function checks if the mouse is pressed within the bounds of any of the cards, and if so, it redirects to the corresponding episode page
function mousePressed() {
for (let i = 0; i < 6; i++) {
let col = i % 3;
let row = floor(i / 3);
let x = cols[col] * ratio;
let y = rows[row] * ratio;
let w = cardW * ratio;
let h = cardH * ratio;
if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
window.location.href = episodes[i].url;
}
}
}

function windowResized() {
const design_w = 1440;
const design_h = 1024;
ratio = min(windowWidth / design_w, windowHeight / design_h);
resizeCanvas(design_w * ratio, design_h * ratio);
}























//let ratio;

//function setup() {
  //const design_w = 1440;
  //const design_h = 1024;
  //ratio = min(windowWidth / design_w, windowHeight / design_h);
  //createCanvas(design_w * ratio, design_h * ratio);
  //link1 = createA("index1.html", "EPISODE 1- ROOKIES");
  //link2 = createA("index2.html", "EPISODE 2- OLYMPIANS");
  //link3 = createA("index3.html", "EPISODE 3- HUNTER");
  //link4 = createA("index4.html", "EPISODE 4- ROSE");
  //link5 = createA("index5.html", "EPISODE 5- ILL BELIEVE IN ANYTHING");
  //link6 = createA("index6.html", "EPISODE 6- THE COTTAGE");
  //link11 = createA(
    //"index1.html",
    //'<img src="assets/episode_1/episode_1.png", alt="episode_1">',);
  //link22 = createA(
    //"index2.html",
    //'<img src="assets/episode_2/episode_2_background.png", alt="episode_2_background">',);
  //link33 = createA(
    //"index3.html",
    //'<img src="assets/episode_3/episode_3_background.png", alt="episode_3_background">',);
  //link44 = createA(
    //"index4.html",
    //'<img src="assets/episode_4/episode_4_background.png", alt="episode_4_background">',);
  //link55 = createA(
    //"index5.html",
    //'<img src="assets/episode_5/episode_5_background.png", alt="episode_5_background">',);
  //link66 = createA(
    //"index6.html",
    //'<img src="assets/episode_6/episode_6_background.png", alt="episode_6_background">',);
  //cursor("assets/HR.png");
//}

//function draw() {
  //background("#f0eee6");

  // //title
  //textSize(240);
  //textAlign(CENTER);
  //fill("black");
  //text("HEATED RIVALRY", 635, 189);
  //textFont("zuume-cut");
  //textStyle(BOLD);

  // //episode 1
  //link1.position(117, 550);
  //link1.style("font-size", "20px");
  //link1.style("text-align", "LEFT");
  //link1.style("text-style", "NORMAL");
  //link1.style("color", "black");
  //link1.style("text-decoration", "none");
  //link1.style("font-family", "zumme");
  //link11.position(-280, 11);
  //link11.style("transform", "scale(0.35)");

  // //episode 2
  //link2.position(631, 550);
  //link2.style("font-size", "20px");
  //link2.style("text-align", "LEFT");
  //link2.style("text-style", "NORMAL");
  //link2.style("color", "black");
  //link2.style("text-decoration", "none");
  //link2.style("font-family", "zumme");
  //link22.position(241, 68);
  //link22.style("transform", "scale(0.35)");

  // //episode 3
  //link3.position(1146, 550);
  //link3.style("font-size", "20px");
  //link3.style("text-align", "LEFT");
  //link3.style("text-style", "NORMAL");
  //link3.style("color", "black");
  //link3.style("text-decoration", "none");
  //link3.style("font-family", "zumme");
  //link33.position(748, 12.5);
  //link33.style("transform", "scale(0.35)");

  // //episode 4
  //link4.position(117, 887);
  //link4.style("font-size", "20px");
  //link4.style("text-align", "LEFT");
  //link4.style("text-style", "NORMAL");
  //link4.style("color", "black");
  //link4.style("text-decoration", "none");
  //link4.style("font-family", "zumme");
  //link44.position(-282, 352);
  //link44.style("transform", "scale(0.35)");

  // //episode 5
  //link5.position(631, 887);
  //link5.style("font-size", "20px");
  //link5.style("text-align", "LEFT");
  //link5.style("text-style", "NORMAL");
  //link5.style("color", "black");
  //link5.style("text-decoration", "none");
  //link5.style("font-family", "zumme");
  //link55.position(232, 350);
  //link55.style("transform", "scale(0.35)");

  // //episode 6
  //link6.position(1146, 887);
  //link6.style("font-size", "20px");
  //link6.style("text-align", "LEFT");
  //link6.style("text-style", "NORMAL");
  //link6.style("color", "black");
  //link6.style("text-decoration", "none");
  //link6.style("font-family", "zumme");
  //link66.position(750, 351);
  //link66.style("transform", "scale(0.35)");
//}

//function windowResized() {
  //const design_w = 1440;
  //const design_h = 1024;
  //ratio = min(windowWidth / design_w, windowHeight / design_h);
  //resizeCanvas(design_w * ratio, design_h * ratio);
//}