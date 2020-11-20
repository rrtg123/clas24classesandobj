const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,bird1;
var pig1,log1,pig2,log2,log3,log4;
var box3,box4,box5;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new pig(800,300);
    log1=new log(800,200,350,PI/2)
    bird1=new bird(100,100);

    box3 = new Box(700,180,70,70);
    box4 = new Box(900,180,70,70);
    pig2=new pig(800,180);
    log2=new log(700,120,300,PI/2)
    box5 = new Box(800,100,70,70);

    log3=new log(750,120,150,PI/7)
    log4=new log(850,120,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
   bird1.display();
   // box3.display();
   // box4.display();
   // pig2.display();
   //log2.display();
    //box5.display();
    //log3.display();
   //log4.display();
}