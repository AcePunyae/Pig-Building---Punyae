const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1
var log1
var bird1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

log1=new log (200,320,180,PI/2)


    box1 = new Box(125,350,50,50);
    pig1=new Pig(200,360)
    box2 = new Box(275,350,50,50);
    
    box3=new Box(200,310,50,50)
    box4=ne
    log2= new log(120,250,160,PI/15);
   // pig2= new Pig(200,320)
   // box4-new Box(125,310,50,50)
    ground = new Ground(200,height,400,20)
    bird1=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
  
    box1.display();
    box2.display();
pig1.display();
log1.display();
bird1.display();
box3.display();
log2.display();

    ground.display();
}