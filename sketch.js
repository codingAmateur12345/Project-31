const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var ground;

var section1,section2,section3,section4,section5;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

ground = new Base(240,790,800,20);

for(var p=0; p<=width; p=p+50){
  plinkos.push(new Ball(p,75,20,20));
}
for(var j=0; j<=width-10; j=j+50){
  plinkos.push(new Ball(j,175,20,20));
}
for(var q=0; q<=width-20; q=q+50){
  plinkos.push(new Ball(q,275,20,20));
}
for(var r=0; r<=width-30; r=r+50){
  plinkos.push(new Ball(r,375,20,20));
}

for(var k=0; k<=width; k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

if(frameCount%60===0){
  particles.push(new Piece(random(width/2-10, width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
  particles.push(new Piece(random(width/2-10,width/2+10),10,10));
}

 
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  ground.display();
  
for(var j=0; j<particles.length; j++){
  particles[j].display();
}
for(var k=0; k<divisions.length; k++){
  divisions[k].display();
}
for(var i=0; i<plinkos.length; i++){
  plinkos[i].display();
}
for(var p=0; p<plinkos.length; p++){
  plinkos[p].display();
}

 
  

}