
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof1;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER) 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	roof1 = new Roof (400,200,200,20);
	
	bobDiameter=40;

	startbobPositionX=width/2;
	startbobPositionY=height/4+500;
	bob1=new bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
	bob2=new bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
	bob3=new bob (startbobPositionX,startbobPositionY,bobDiameter);
	bob4=new bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
	bob5=new bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);

	rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0);
	rope2=new rope(bob2.body,roof1.body,-bobDiameter*2,0);
	rope3=new rope(bob3.body,roof1.body,-bobDiameter*2,0);
	rope4=new rope(bob4.body,roof1.body,-bobDiameter*2,0);
	rope5=new rope(bob5.body,roof1.body,-bobDiameter*2,0);
	
}



function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
roof1.display();
rope1.display();
  drawSprites();
 
}



