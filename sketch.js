var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="pink"

  movingRect=createSprite(200,200,50,50);
  movingRect.shapeColor="pink"

  //movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2
  //450- 400===25+25
  //50===50

}

function draw() {
  background("green");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor="Blue"
    fixedRect.shapeColor="Blue"
  }else{
    movingRect.shapeColor="pink"
    fixedRect.shapeColor="pink"
  }

  drawSprites();
}