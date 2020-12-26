const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var ground,stand1,stand2,slingshot
var ballImg
var score=0
function preload()
{
ballImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	stand1=new Ground(330,550,250,10)
	stand2=new Ground(600,450,200,10)
	//level1
	box1= new Box(250,540,30,40)
	box2= new Box(280,540,30,40)
	box3= new Box(310,540,30,40)
	box4= new Box(340,540,30,40)
	box5= new Box(370,540,30,40)
	box6= new Box(400,540,30,40)
	box7= new Box(430,540,30,40)
	 //level2
	box8= new Box(280,500,30,40)
	box9= new Box(310,500,30,40)
	box10= new Box(340,500,30,40)
	box11= new Box(370,500,30,40)
	box12= new Box(400,500,30,40)
	//level3
	box13= new Box(310,460,30,40)
	box14= new Box(340,460,30,40)
	box15= new Box(370,460,30,40)
	//level4
	box16= new Box(340,420,30,40)
	
	//level1
	box17= new Box(530,425,30,40)
	box18= new Box(560,425,30,40)
	box19= new Box(590,425,30,40)
	box20= new Box(620,425,30,40)
	box21= new Box(650,425,30,40)
    //level2
	box22= new Box(560,385,30,40)
	box23= new Box(590,385,30,40)
	box24= new Box(620,385,30,40)
	//level3
	box25= new Box(590,345,30,40)

	ball=Bodies.circle(50,500,20);
  World.add(world,ball);
  
  
  slingshot = new Slingshot(this.ball,{x:100, y:400});
  

	Engine.run(engine);

}


function draw() {
 // rectMode(CENTER);
 if(background(255)){
  background(255);
}
  textSize(35)
  fill ("grey")
  text("score: "+score,250,150)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  
 
  
  ground.display();
  stand1.display();
  stand2.display();
  fill(9, 242, 226);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill(89, 210, 255);
  box13.display();
  box14.display();
  box15.display();
fill(211, 255, 150)
  box16.display();
  fill(9, 242, 226);
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("pink")
  box22.display();
  box23.display();
  box24.display();
  fill(89, 210, 255);
  box25.display();
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  
  box13.score();
  box14.score();
  box15.score();

  box16.score();
 
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  
  box22.score();
  box23.score();
  box24.score();
  
  box25.score();
  imageMode (CENTER)
  image(ballImg,ball.positionX,ball.positionY,40,40);
  
  
  fill(255)
  slingshot.display();

  getBackground()
  
  //drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode==32){
    slingshot.attach(this.ball)
  }
}

async function getBackground(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06&&hour<=18){
      bg=255
  }
  else {
      bg=0
      
  }


  console.log(hour);
}

