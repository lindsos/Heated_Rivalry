let ratio;
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
const cols = [50, 525, 1000];
const rows = [300, 700];
const cardW = 385;
const cardH = 231;
const labelOffsetY = 30;
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
textFont("zuume-cut");
}

function draw() {
background("#f0eee6");

push(); 
textSize(240 * ratio);
textAlign(CENTER);
textStyle(BOLD);
fill("black");
noStroke();
text("HEATED RIVALRY", 725 * ratio, 200 * ratio);
pop();

for (let i = 0; i < 6; i++) {
let col = i % 3;
let row = floor(i / 3);
let x = cols[col] * ratio;
let y = rows[row] * ratio;
let w = cardW * ratio;
let h = cardH * ratio;

image(imgs[i], x, y, w, h);

fill("black");
noStroke();
textSize(35 * ratio);
textAlign(LEFT);
textStyle(NORMAL);
text(episodes[i].label, x, y + h + labelOffsetY * ratio);
}
}

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