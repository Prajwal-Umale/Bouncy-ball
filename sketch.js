const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
function setup() {
  createCanvas(400,400);

  //creating physics engine
  engine = Engine.create();
  //create the world using engine
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  //create a ground
  ground = Bodies.rectangle(200, 390, 400, 20,ground_options);
  //add the ground in to the world
  World.add(world, ground);
 
  var ball_options= {
    restitution : 1
  }

  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

}

function draw() {
  background("yellow");  
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  fill("blue");
  stroke("red");
  strokeWeight(4);
  ellipse(ball.position.x,ball.position.y,20,20);
}