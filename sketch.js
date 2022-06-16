
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var ground;
var left;
var right;

var bg,bgImg;
var hoop,hoopImg;
var ball,ballImg;
var girl

function preload(){
  bgImg = loadImage('back ground.jpg');
  hoopImg = loadImage('hoop.png');
  ballImg = loadImage('ball.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(width/2,height-20,width,10);

  hoop = createImg('hoop.png');
  hoop.position(width-350,100);
  hoop.size(200,200);

  
 

  girl = createImg('girl.png');
  girl.position(width-750,250,);
  girl.size(100,400);


	var ballOptions={
    isStatic:true,
	  restitution:1,
	  friction:0,
	  density:1.2,


	}

	//Create the Bodies Here.
  ball=Bodies.circle(width-700,270,10,ballOptions) 
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(bgImg);
  

  ground.show();
  imageMode(CENTER)
  image(ballImg,ball.position.x,ball.position.y,60,60)

  Engine.update(engine);

  
  
 
}

function keyPressed(){
 if (keyCode===32){
  Matter.Body.setStatic(ball,false)
  Matter.Body.applyForce(ball,ball.position,{x:5,y:-5});
 }
}

