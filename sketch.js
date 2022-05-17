var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1500, 700);
  spacecraft = createSprite(700,600,20,20);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.3;
  
  iss = createSprite(700,300,18,10);
  iss.addImage(issimg);
  iss.scale = 0.5;
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){

    spacecraft.x = spacecraft.x + random(-1,1);
    spacecraft.x = spacecraft.x + random(-1,1);
    spacecraft.x = spacecraft.x + random(-1,1);
    spacecraft.x = spacecraft.x + random(-1,1);
    
    if (!hasDocked) {
      if (keyDown(LEFT_ARROW)) {
        spacecraft.x = spacecraft.x - 2;
      }

      if (keyDown(RIGHT_ARROW)) {
        spacecraft.x = spacecraft.x + 2;
      }
      if (keyDown(UP_ARROW)) {
        spacecraft.y = spacecraft.y - 2;
      }
      if (keyDown(DOWN_ARROW)) {
      }
    }
  
}


  if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
     text("Docking Successful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
     textSize(25);
    fill("white")
     text("Docking Successful!", 200, 300);
   }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
    text("Docking UnSuccessful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }

  drawSprites();
  if (spacecraft.x === 592 && spacecraft.y === 470) {
    hasDocked = true;
    stroke("black");
    fill("white");
    textSize(50);
    textFont("Stargaze");
    text("Docking Successfull!", 1000, 300);
  }

  }

stroke("black");
  fill("white");
  textSize(30);
  textFont("Stargaze");
  text("Docking-Undocking Mission", 20, 30);

