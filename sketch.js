var box;

function setup() {
 createCanvas(600,400);

 box = createSprite(300,200,40,40);
 box.shapeColor="teal";

}

function draw() {
  background(0);

  drawSprites();
}