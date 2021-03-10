function setup() {
  createCanvas(800,400);
  rec1=createSprite(100,50,100,100)
  rec2=createSprite(200,300,100,100)
  rec1.shapeColor='red'
  rec2.shapeColor='yellow'
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rec1.x=mouseX
  rec1.y=mouseY
  if(rec1.x-rec2.x<rec1.width/2+rec2.width/2 && rec2.x-rec1.x<rec1.width/2+rec2.width/2){
rec1.shapeColor='black'
rec2.shapeColor='blue'

  }
  
}