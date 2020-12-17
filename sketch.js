//Create variables here
var dog , happyDog;
var database , foodS , foodStock;

function preload()
{
  //load images here
  dog=loadImage("images/Dog.png");

  happyDog=loadImage("images/happydog.png");
}

function setup() {
  database= firebase . database();
  console.log(database);

	createCanvas(500, 500);
  
  dog=createSprite(270,270,60,60);
  dog.addImage(dog);

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

}


function draw() { 
  background(46,139,87); 
  dog.display();

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  text("foodStock: ",180,180);
  textSize(20);
  fill("white");
  noStroke();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}