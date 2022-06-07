var ball 

function setup() {
  createCanvas(600,600);
  ball = createSprite(150, 150, 50, 50)
  
}

function draw() 
{
  background("red");
  if (keyIsDown(RIGHT_ARROW)) {
    ball.position.x = ball.position.x +5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    ball.position.x = ball.position.x -5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ball.position.y = ball.position.y +5;
  }

  if (keyIsDown(UP_ARROW)) {
    ball.position.y = ball.position.y -5;
  }

  drawSprites();
 
}