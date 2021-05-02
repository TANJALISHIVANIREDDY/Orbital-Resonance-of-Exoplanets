s=1;
s_2=1;
s_3=1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(220);
  ellipse(200,200,63);
  ellipse(200,200,93);
  ellipse(200,200,163);
  push();
  translate(200,200);
  rotate(s);
  s =s+0.0229;
  fill(225);
  circle(0,0,5);
  fill('blue')
  circle(31.5,0,5);
 // circle(46.3,0,7);
 // circle(81.5,0,2.5)
  pop();
  push();
  translate(200,200);
  rotate(s_2);
  s_2 =s_2+0.0210698;
  fill(225);
  circle(0,0,5);
  fill('red')
  //circle(31.5,0,5);
   circle(46.3,0,7);
 // circle(81.5,0,2.5)
  pop();
  push();
  translate(200,200);
  rotate(s_3);
  s_3 =s_3+0.0158306;
  fill('pink')
 // circle(31.5,0,5);
 // circle(46.3,0,7);
   circle(81.5,0,5);
  pop();
}