
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy,boyImg;
var mangoo,mangoo2,mangoo3,mangoo4,mangoo5,mangoo6,mangoo7;
var tree;
var elastic,stone; 
var attachBody;
function preload()
{
	boyImg=loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	attachBody=new ground(130,450,10,5);
    
	boy=createSprite(100,500);
	boy.addImage(boyImg);
	boy.scale=0.1;
	//Create the Bodies Here.
    boy= new boyClass(100,500);
	mangoo=new mango(370,200,80,100);
	mangoo2=new mango(430,300,80,100);
	mangoo3=new mango(490,100,80,100);
	mangoo4=new mango(600,150,80,100);
	mangoo5=new mango(650,250,80,100);
	mangoo6=new mango(520,200,80,100);
	mangoo7= new mango(720,150,80,100);
	tree= new treeClass(500,300,700,600);
	stone=new stoneClass(140,410,100,70);
	elastic=new elasticClass(attachBody.body,stone.body);

	Engine.run(engine);
  
	
}

function draw() {
  rectMode(CENTER);
  background("white");
  boy.display();
  tree.display();
  mangoo.display();
  mangoo2.display();
  mangoo3.display();
  mangoo4.display();
  mangoo5.display();
  mangoo6.display();
  mangoo7.display();
  stone.display();
  attachBody.display();
  elastic.display();
 
  
  

  /*strokeWeight(3);
  stroke("white");
  line(attachBody.body.position.x,attachBody.body.position.y,elastic.body.position.x,elastic.body.position.y);
 */

}
function mouseDragged() {

    Matter.Body.setPosition(stone.body,{ x: mouseX , y: mouseY });

}

function mouseReleased(){

	elastic.fly();
	Matter.Body.applyForce(stone.body,stone.body.position,{x : 180, y : 50});
	
}
function detectCollision(Lstone,Lmangoo){
	mangoo.body.position=Lmangoo.body.position;
	stone.body.position=Lstone.body.position;

	var disance=dist(stone.body.position.x,stone.body.position.y,mangoo.body.podition.x,mangoo.body.position.y);
	if(distance <= Lmangoo.width + Lstone.width){

		Matter.Body.setStatic(Lmangoo.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		
		Matter.Body.setPosition(stone.body,{x: 235 , y : 420});
		elastic.attach(attachBody);

	}
}

