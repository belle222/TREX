
function setup() {
  createCanvas(400,400);
  caixa=createSprite(200,200,10,10);

}

function draw() 
{
   background(30);
if(keyIsDown(RIGHT_ARROW)){
  caixa.position.x=caixa.position.x+3;
}
if(keyIsDown(LEFT_ARROW)){
  caixa.position.x=caixa.position.x-3;
}
if(keyIsDown(UP_ARROW)){
  caixa.position.y=caixa.position.y-3;
}
if(keyIsDown(DOWN_ARROW)){
  caixa.position.y=caixa.position.y+3;
}

  drawSprites();
}




