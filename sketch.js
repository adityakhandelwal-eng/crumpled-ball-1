
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world,engine,ground,box1,box2,box3,dustbin,dustbin2,dustbin3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var options={
    isStatic:false,
    restitution:0.3,
    friction:0.3,
    density:1.2
  }
  
  paperObject=new Paper(100,100,30,30)
   
    ground=new Ground(200,400,2000,20)
  World.add(world,ground);
 dustbin=new Dustbin(500,330,20,120)
dustbin2=new Dustbin(570,380,120,20)
	Engine.run(engine)
	dustbin3=new Dustbin(630,330,20,120)
}



function draw() {
  
  background(800);
  ground.display();

  paperObject.display();
dustbin.display();
dustbin2.display();
 dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:44,y:-40})
  }
}


