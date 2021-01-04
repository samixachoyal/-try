
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var trash;
var box1,box2,box3;

function preload()
{
  db = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,20)
    trash= new Paper(100,630,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display();
  trash.display();
  drawSprites();
  image(db,470,500,100,150);
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(trash.body,trash.body.position,{x:30,y:-60});
}
}



