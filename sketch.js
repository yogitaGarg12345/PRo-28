
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(650,690,1300,20)

  tree = new Tree(1000,400,400,500)

  mango1 = new Mango(920,320,40,60)
  mango2 = new Mango(990,340,40,60)
  mango3 = new Mango(995,230,40,60)
  mango4 = new Mango(1100,330,40,60)
  mango5 = new Mango(1100,250,40,60)

  boy = new Boy(200,500,190,350)

  stone = new Stone(140,500,40,40)

  slingshot1 = new Slingshot(stone.body,boy.body,30,-20)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

  stone.display();

  slingshot1.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
  slingshot.fly()
  
  }
  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:140,y:500})
      slingshot.attach(stone.body)
    }
  }

  function detectCollision(Lstone,Lmango){
    mangoBodyPosition = lmango.Body.Position;
    stoneBodyPosition = Lstone.Body.Position;


    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if(distance<lmango.r+lstone.r){

      Matter.Body.setStatic(lmango.body,false);


     }

  }



