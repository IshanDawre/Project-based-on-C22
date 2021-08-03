
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_option;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new ball(100,195,30,30,options);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Matter.Bodies.circle(x,y,radius,options);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(body,position,force);
	}
}



