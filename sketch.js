function setup() {
  createCanvas(1600, 900);
  link1 = createA("index1.html", "EPISODE 1- ROOKIES");
  link2 = createA("index2.html", "EPISODE 2- OLYMPIANS");
  link3 = createA("index3.html", "EPISODE 3- HUNTER");
  link4 = createA("index4.html", "EPISODE 4- ROSE");
  link5 = createA("index5.html", "EPISODE 5- ILL BELIEVE IN ANYTHING");
  link6 = createA("index6.html", "EPISODE 6- THE COTTAGE");
  link11 = createA(
    "index.html",
    '<img src="assets/episode_1/episode_1.png", alt="episode_1">',);
  link22 = createA(
    "index.html",
    '<img src="assets/episode_2/episode_2_background.png", alt="episode_2_background">',);
  link33 = createA(
    "index.html",
    '<img src="assets/episode_3/episode_3_background.png", alt="episode_3_background">',);
  link44 = createA(
    "index.html",
    '<img src="assets/episode_4/episode_4_background.png", alt="episode_4_background">',);
  link55 = createA(
    "index.html",
    '<img src="assets/episode_5/episode_5_background.png", alt="episode_5_background">',);
  link66 = createA(
    "index.html",
    '<img src="assets/episode_6/episode_6_background.png", alt="episode_6_background">',);
  cursor("assets/HR.png");
}

function draw() {
  background("#f0eee6");

  //title
  textSize(240);
  textAlign(CENTER);
  fill("black");
  text("HEATED RIVALRY", 800, 189);
  textFont("zuume-cut");
  textStyle(BOLD);

  //episode 1
  link1.position(117, 550);
  link1.style("font-size", "20px");
  link1.style("text-align", "LEFT");
  link1.style("text-style", "NORMAL");
  link1.style("color", "black");
  link1.style("text-decoration", "none");
  link1.style("font-family", "zumme");
  noStroke();
  fill("#D9DDE9");
  rect(71, 225, 427, 281);
  link11.position(-280, 11);
  link11.style("transform", "scale(0.35)");

  //episode 2
  link2.position(631, 550);
  link2.style("font-size", "20px");
  link2.style("text-align", "LEFT");
  link2.style("text-style", "NORMAL");
  link2.style("color", "black");
  link2.style("text-decoration", "none");
  link2.style("font-family", "zumme");
  noStroke();
  fill("#111C45");
  rect(585, 225, 427, 281);
  link22.position(241, 68);
  link22.style("transform", "scale(0.35)");

  //episode 3
  link3.position(1146, 550);
  link3.style("font-size", "20px");
  link3.style("text-align", "LEFT");
  link3.style("text-style", "NORMAL");
  link3.style("color", "black");
  link3.style("text-decoration", "none");
  link3.style("font-family", "zumme");
  noStroke();
  fill("#163355");
  rect(1100, 224, 429, 282);
  link33.position(748, 12.5);
  link33.style("transform", "scale(0.35)");

  //episode 4
  link4.position(117, 887);
  link4.style("font-size", "20px");
  link4.style("text-align", "LEFT");
  link4.style("text-style", "NORMAL");
  link4.style("color", "black");
  link4.style("text-decoration", "none");
  link4.style("font-family", "zumme");
  noStroke();
  fill("#F5FDFF");
  rect(71, 567, 427, 274);
  link44.position(-282, 352);
  link44.style("transform", "scale(0.35)");

  //episode 5
  link5.position(631, 887);
  link5.style("font-size", "20px");
  link5.style("text-align", "LEFT");
  link5.style("text-style", "NORMAL");
  link5.style("color", "black");
  link5.style("text-decoration", "none");
  link5.style("font-family", "zumme");
  noStroke();
  fill("#A3DEF8");
  rect(585, 567, 427, 274);
  link55.position(232, 350);
  link55.style("transform", "scale(0.35)");

  //episode 6
  link6.position(1146, 887);
  link6.style("font-size", "20px");
  link6.style("text-align", "LEFT");
  link6.style("text-style", "NORMAL");
  link6.style("color", "black");
  link6.style("text-decoration", "none");
  link6.style("font-family", "zumme");
  noStroke();
  fill("#FDE9BD");
  rect(1100, 567, 427, 274);
  link66.position(750, 351);
  link66.style("transform", "scale(0.35)");
}
