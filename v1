var linjer = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed() {
  var v = createVector(mouseX,mouseY);
  linjer.push(v);
}

function draw() {
  background(225);
  
  var reached = [];
  var unreached = [];
  
  for (let i = 0; i < linjer.length; i++) {
    unreached.push(linjer[i]);
  }
  
  reached.push(unreached[0]);
  unreached.splice(0,1);  
  
  while(unreached.length > 0) {
    var record = 100000;
    var rIndex;
    var uIndex;
    
    for (var i = 0; i < reached.length; i++) {     
      for (let j = 0; j < unreached.length; j++) {
        var v1 = reached[i];
        var v2 = unreached[j];
        var d = dist(v1.x,v1.y,v2.x,v2.y);
        
        if (d< record) {
          record = d;
          rIndex = i;
          uIndex = j;
          }
      }     
    }
    strokeWeight(2);
   var r = unreached[uIndex].x % 255;
    var g = unreached[uIndex].y % 255;
    var b = linjer.length % 255;
   stroke(r,g,b); line(reached[rIndex].x,reached[rIndex].y,unreached[uIndex].x,unreached[uIndex].y);
    
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
    
  }
  
  for (var i = 0; i < linjer.length; i++) {
    fill(180,130,80);
    noStroke();
    ellipse(linjer[i].x,linjer[i].y,16,16);
  }
}
