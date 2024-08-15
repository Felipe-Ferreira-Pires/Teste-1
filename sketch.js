var raquete


function setup() {
  createCanvas(800,600)
 raquete=createSprite (400,585,75,15)

}

function draw() {
  background("black")
  drawSprites ()
  if (keyDown ("a") ) {
raquete.position.x-= 10
  }
  if (keyDown ("d")) {
raquete.position.x+=10
  }

  
  
}