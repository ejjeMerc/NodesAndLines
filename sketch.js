var cirkler = [];
var cirkel;
var r = 10;

function setup() {
  createCanvas(400, 400);
  mx = 0;
  my = 0;
}

function draw() {
  background(220);
  textAlign(CENTER);
  textSize(20);
  text("Klik med musen \n og se hvad der sker",width/2,50);
  
for (let i = 0; i < cirkler.length; i++)  { 
  // tegner streger imellem cirklerne
  strokeWeight(2);
  if(i < cirkler.length-1) {
    line(cirkler[i+1].x, cirkler[i+1].y,cirkler[i].x,cirkler[i].y);
  } 
  else { //samler første og sidste node
    line(cirkler[i].x, cirkler[i].y,cirkler[0].x,cirkler[0].y);
  } 
  //tegner cirklerne
  strokeWeight(4);
  fill(255,200,100);
  circle(cirkler[i].x,cirkler[i].y,2*r);
}
  
  
  print(cirkler.length);
}

function mousePressed() {
  cirkel = createVector(mouseX,mouseY);
  var okay = true;
  for(let i = 0; i < cirkler.length; i++) {
    let d = dist(cirkel.x,cirkel.y,cirkler[i].x,cirkler[i].y);
    if (d < 2*r ) {
      okay = false;
    }
  }
  if(okay)
  {cirkler.push(cirkel);}
}
