var backImage,backgr;
var player,player_img;
var ground,ground_img;

var Foodgroup,bananaImage;
var obstaclesGroup,
    obstacle_img;

var gameOver
var score=0;


function preload(){
  backImage=loadImage("jungle.jpg");
 
  player_running=loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");

bananaImage=
  loadImage("banana.png");
obstacle_img=
  loadImage("stone.png");
}

function setup(){
 createCanvas(800,400) 
  
backgr=createSprite(0,0,800,400)
  backgr.addImage(backImage)
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player=
    createSprite(400,350,800,10);
   player.addAnimation("Running",player_running)
  player.scale=0.1;
  
  ground=create(400,350,800,10);
  ground.velocityX=-4;
  ground.visisble=false;
  
  foodGroup =new Group();
  obstaclesGroup=new group();
  
  score=0;
  }

function draw(){
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  if(FoodGroup.isTouching(player)){
    FoodGroup.destroyEach();
    score=score+2;
  }
 switch(score){
   case 10:
  player.scale=0.12;
     break;
     case 20:
  player.scale=0.14;
     break;
     case 30:
     player.scale=0.16;
     break;
     case 40:
     player.scale=0.18;
     break;
     default:break;
      }
if(keyDown("space"))  {
  player.velocityY=-12;
}
 player.velocityY=player.velocityY+0.8;
  
  player.collide(ground);
  spawnFood();
  spawnObstacles();
  
  if(obstaclesGroup.isTouching(player)){
    player.scale=0.08;
    //score=score-2;
  }
  drawSprites()  
}