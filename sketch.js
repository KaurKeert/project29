const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var ball1

var land1,land2
var block1 , block2,block3,block4,block5
var block6,block7,block8,block9
var block10,block11,block12
var block13,block14
var block15

var b1,b1,b3,b4,b5,b6,b7,b8,b9,b10
var slingshot

function setup() {
engine=Engine.create()
world=engine.world


  createCanvas(800,400);
 
land1=new Land(350,300,200,10)
land2=new Land(600,200,150,10)

ball1=new ball(180,200,30)

//1 line block
block1=new Block(290,280,30,30)
block2=new Block(320,280,30,30)
block3=new Block(350,280,30,30)
block4=new Block(380,280,30,30)
block5=new Block(410,280,30,30)

//2 line blocks
block6=new Block(305,250,30,30)
block7=new Block(335,250,30,30)
block8=new Block(365,250,30,30)
block9=new Block(395,250,30,30)


//3 line blocks
block10=new Block(320,220,30,30)
block11=new Block(350,220,30,30)
block12=new Block(380,220,30,30)

//4 line

block13=new Block(335,190,30,30)
block14=new Block(365,190,30,30)
//5 line

block15=new Block(350,160,30,30)



// 1 line of 2 land 

b1=new Block(550,180,30,30)
b2=new Block(580,180,30,30)
b3=new Block(610,180,30,30)
b4=new Block(640,180,30,30)

b5=new Block(565,150,30,30)
b6=new Block(595,150,30,30)
b7=new Block(625,150,30,30)

b8=new Block(580,120,30,30)
b9=new Block(610,120,30,30)

b10=new Block(595,90,30,30)


slingshot=new Slingshot(ball1.body,{x:180,y:200})

}

function draw() {
  background(225); 
  Engine.update(engine)

  land1.display();
  land2.display();

  ball1.display()

  //1 line block colour
  fill("violet")
  stroke(14)

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()

//2 line block display

fill("indigo")
stroke(14)

block6.display()
block7.display()
block8.display()
block9.display()

//3 line block colour
fill("lime")
stroke(14)
block10.display()
block11.display()
block12.display()

//4 line 
fill("yellow")
stroke(14)
block13.display()
block14.display()

//5 line
fill("cyan")
stroke(14)
  block15.display()

// 2land blocks
fill("orange")
b1.display()
b2.display()
b3.display()
b4.display()

fill("purple")
b5.display()
b6.display()
b7.display()

fill("red")
b8.display()
b9.display()

fill("pink")
b10.display()

slingshot.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

