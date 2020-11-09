var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var score2 = 0;
var bg, bgImage;
function preload(){
  
  
  monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bgImage = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(400,400);
  
  bg = createSprite(0,0,400,400);
  bg.addImage(bgImage);
  bg.scale = 1.2;
  bg.velocityX = -6; 
  
  monkey = createSprite(90,360,20,50);
  monkey.addAnimation("running", monkey_running);
  //trex.addAnimation("collided",trex_collided);
  monkey.scale = 0.1;

  ground = createSprite(400,395,900,10);
  ground.visible = false;

 FoodGroup = new Group();
 obstacleGroup = new Group();
}

function draw() {
  background("white");
  
  if(frameCount % 200 === 0){
      dontobstacle(); 
      scorebanana();
    }
  
  
      //ground.velocityX = -(4+(score / 100)); 
  if(keyDown("space")&& monkey.y >= 160) {
    monkey.velocityY = -11;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  
  monkey.collide(ground);
  
  if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score2 = score2+5;
    
  }
  
  switch (score2) {
    case 20: monkey.scale = 0.2;
      break;
    case 40: monkey.scale = 0.3;
      break;
    case 60: monkey.scale = 0.4;
      break;
    case 80: monkey.scale = 0.5;
      break;
  }
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
    score = 0;
  }
  
  drawSprites();
  
  score = Math.ceil(frameCount/frameRate());
  textSize(15);
  fill("black");
  text("Survival Time " +score,155,50);
  
  text(" , score " +score2,270,50);
}

function dontobstacle (){
  var obstacle = createSprite(390,375,20,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX =-6;
  obstacle.lifetime = 400;
  obstacle.scale = 0.1;
  obstacleGroup.add(obstacle);
}

function scorebanana (){
  var banana = createSprite(390,375,20,10);
  banana.y = Math.round(random(250,300));
  banana.addImage(bananaImage);
  banana.velocityX =-6;
  banana.lifetime = 400;
  banana .scale = 0.1;
  FoodGroup.add(banana);
}




