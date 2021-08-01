var iss , spacecraft, box;
var hasDocked = false;
var bg,issImage, spacecraft1, spacecraft2, spacecraft3, spacecraft4;

function preload(){
 issImage = loadImage("iss.png");
 bg = loadImage("spacebg.jpg");
 spacecraft1 = loadImage("spacecraft1.png");
 spacecraft2 = loadImage("spacecraft2.png");
 spacecraft3 = loadImage("spacecraft3.png");
 spacecraft4 = loadImage("spacecraft4.png"); 
}

function setup() {
  createCanvas(1000,700);

  spacecraft = createSprite(485,500);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.20;

  iss = createSprite(500,350);
  iss.addImage(issImage);
  iss.scale = 1.3;

}

function draw() {
  background(bg); 
  
  box = createSprite(420,410,20,20);
  box.visible = false;

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 2;
  }
  
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft1);
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3);
    spacecraft.x = spacecraft.x - 2;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft2);
    spacecraft.x = spacecraft.x + 2;
  }
     }

  if(spacecraft.isTouching(box)){
    spacecraft.position.x = 415;
    spacecraft.position.y = 435;
    spacecraft.addImage(spacecraft1);
    textSize(30);
    fill("white");
    text("Docking Successful", 500, 600);
    
  }   

  drawSprites();
}

