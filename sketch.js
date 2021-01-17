
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone1;
var slingshot;
var gameState
var bg;

function preload(){
  boy=loadImage("images/boy.png");
  bg = loadImage("images/jungle.jpg")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;

  mango1=new mango(1100,100,30);
  mango2=new mango(1175,160,35);
  mango3=new mango(1040,120,30);
  mango4=new mango(950,200, 40);
  mango5=new mango(1100,200,30);
  mango6=new mango(1030,200,25);
  mango7=new mango(1040,70,25);
  mango8=new mango(985,240,25);
  mango9=new mango(1200,220,40);
  mango10=new mango(985,130,25);

	treeObj=new tree(1050,580);
  groundObject=new ground(width/2,600,width,20);
  
  stone1 = new Stone(1100,100,30);
  
  slingshot= new SlingShot(stone1.body,{x:230, y:420});
	
	Engine.run(engine);

}

function draw() {

  background(bg);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  textFont("Georgia")
  stroke("white")
  strokeWeight(1.5);
  textSize(25);
  fill("white")
 text("If you don't get it at once,Refresh your Page to try Again!",50,50)


  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  
  groundObject.display();
  stone1.display();
  slingshot.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);


}

function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased() {
  slingshot.fly();
 
  }

  function detectCollision(stone,mango) {
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if (distance<=mango.r+stone.r) {
    Matter.Body.setStatic(mango.body,false)
  }
  }

  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone1.body,{x:230,y:420});
      launcherObject.attach(stone1.body);
    }
  }

