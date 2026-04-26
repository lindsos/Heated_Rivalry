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
const labelOffsetY = 30; // label below the card

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
textSize(35 * ratio);
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
let h = cardH +labelOffsetY* ratio;
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