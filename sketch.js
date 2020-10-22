
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}


function setup() {
  createCanvas(600, 200);

  var message = "This is a message";
 console.log(message) 
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
 
  monkey.scale = 0.1;
   
   ground = createSprite(200,180,400,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
   console.log(ground.x)
}


function draw() {
 background(225);
  
     
if(ground.x<0){
  ground.velocityX=-4;
  ground.x=ground.width/2
   
}

 spawnObstacles();
 
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
monkey.velocityY=monkey.velocityY+0.8
monkey.collide(ground)
  
  drawSprites();

}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
obstacle.velocityX = -(6 + score/100);
 }
  
    
}


