const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine, world;

var object,ball;

function setup(){

  canvas = createCanvas (400,400);
  
  engine = Engine.create();
  world= engine.world;

  var options = {
    isStatic: true
  }

  object = Bodies.rectangle(200,390,400,20,options);
  World.add(world,object);
  console.log(object);
  var ball_options = {
    restitution: 1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw(){
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);
}