var wall1,thickness;
var bullet,speed1,weight1;


function setup() {
  createCanvas(1600,800);
  
  wall1 = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(100,200,40,10)
  

  thickness = random(22,83);
  speed1 = random(223,321);
  weight1 = random(30,52);
}

function draw() {
  background(0,0,0);  


bullet.velocityX = speed1;

if(hasCollided(bullet,wall1)){
bullet.velocityX = 0;
var damage = 0.5* weight * speed1 * speed1 / (thickness * thickness * thickness);

if(damage>10){
  wall1.shapeColor = color(255,0,0);
  }

  if(damage<10){
wall1.shapeColor = color(0,255,0);
 }

}
  drawSprites();
}

function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wall1LeftEdge = lwall.x;

  if(bulletRightEdge <= wall1LeftEdge){

    return true;
  }else{
    return false;
  }

}