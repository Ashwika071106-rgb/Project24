
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1, dustbin2, dustbin3;
var block1,block2,block3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40);

    dustbin1 = new Dustbin(890,370,200,20);
	dustbin2 = new Dustbin(800,330,20,100);
	dustbin3 = new Dustbin(1000,330,20,100);

	//block1 = createSprite(400,650,200,20);
	// = createSprite(290,610,20,100);
	// = createSprite(510,610,20,100);
	//block1.shapeColor="red";
	//block2.shapeColor="red";
	//block3.shapeColor="red";

	
	paper = new Paper(400,200,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  paper.display();

  //drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-85});
		//paper.body.velocityY+=85;
	}
}