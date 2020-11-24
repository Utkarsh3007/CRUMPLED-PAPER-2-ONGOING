
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;
var ground;
var paper;
var dbI

function preload(){
dbI=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
  world = engine.world;
  

	//Create the Bodies Here.
	dust1=new Dustbin(width-130,height-50,200,20)
	dust2=new Dustbin(width-30,height-90,20,100)
	dust3=new Dustbin(width-230,height-90,20,100)
  

	ground=new Ground(600,height-29,1200,20)
	
    paper=new Paper(50,200,20)

  Engine.run(engine);
  
 
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  dust1.display();
  dust2.display();
  dust3.display();
  
  
  ground.display();
  
  paper.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-49})
} 

if(paper.body.position.x>width-550){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:6,y:58})
}




}
