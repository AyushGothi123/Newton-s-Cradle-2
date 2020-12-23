const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  ground;
var ball1,ball2,ball3,ball4,ball5, sling1,sling2,sling3,sling4,sling5;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasMouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio =pixelDensity();
  let options={
   mouse: canvasmouse
  };
  mConstraint =mouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  ground = new Ground(600, 600, 3000, 20);



  ball1 = new Pendulum(200, 200, 80, 80);
  ball2 = new Pendulum(250, 200, 80, 80);
  ball3 = new Pendulum(300, 200, 80, 80);
  ball4 = new Pendulum(350, 200, 80, 80);
  ball5 = new Pendulum(400, 200, 80, 80);
  sling1 = new Sling(ball1.body, { x: 500, y: 50 });
  sling2 = new Sling(ball2.body, { x: 550, y: 50 });
  sling3 = new Sling(ball3.body, { x: 600, y: 50 });
  sling4 = new Sling(ball4.body, { x: 650, y: 50 });
  sling5 = new Sling(ball5.body, { x: 700, y: 50 });
  

}

function draw() {
  background("#6BB1AE ");
  Engine.update(engine);
  ground.display();
  
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();



}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})



}
