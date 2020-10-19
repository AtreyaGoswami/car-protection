var car,wall ;
var speed,weight

function setup() {

  speed  = random(55,90);
  weight = random(400,1500);

  createCanvas(1600,400);
 
  car = createSprite(50,200,30,20);
  car.velocityX = speed;

 wall = createSprite(1500,200,60,height/2);
 wall.Shapecolor = (80);
}

function draw() {

  background(0); 

  if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation=0.5 * weight * speed * speed /22509;
  if(deformation>180);
  {
    car.Shapecolor = color(255,0,0);
  }
  
    if (deformation <180 && deformation >100)
  {
  car.Shapecolor=color(230,230,0);
  }
  if (deformation>100)
  {
   car.Shapecolor=color(0,230,0);
  }
}

  drawSprites();
}
