var iron ,iron_running ,iron_collided;
var bg ,bgImage;
var brickGroup,brickImage;


function preload(){
    iron_running = loadAnimation("images/iron.png");
    bgImage = loadImage("images/bgnew.jpg");
    diamondImage=loadImage("images/diamond.png");

   }

function setup() {
createCanvas(1000, 600);

bg = createSprite(580,300);
bg.addImage(bgImage);
bg.scale = 0.5;

bg.velocityX= -6;
iron = createSprite(200,505,20,50);
iron .addAnimation("running",iron_running);
iron.scale = 0.3;
ground = createSprite(200,585,400,10);
ground.visible= false;
diamondsGroup = new Group();


}

function draw() {
  if(bg.x<100){
    bg.x=bg.width/4;
  }

  if(iron.y<50){
    iron.y=50;
  }
  if(iron.x<200){
    iron.x=200;
  }


    if(keyDown("space") ) {
        iron.velocityY = -16;
      }
    
      iron.velocityY = iron.velocityY + 0.5;
     
      generateBricks();
      for(var i = 0 ; i< (diamondsGroup).length ;i++){
        var temp = (diamondsGroup).get(i) ;
        
        if (temp.isTouching(iron)) {
           iron.collide(temp);
          }
            
        }




      iron.collide(ground);
    
    
    drawSprites();

}
function generatediamond() {
  if (frameCount % 70 === 0) {
    var diamond = createSprite(1200,120,40,10);
    diamond.y = random(50,450);
    diamond.addImage(diamondImage);
    diamond.scale = 0.5;
    diamond.velocityX = -5;
    
    diamond.lifetime =250;
    diamondsGroup.add(diamond);
  }

  
}

