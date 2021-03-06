var bgImg;
var bgImage;

var tomCat;
var tomImg;
var tomRunning;
var tomHappy;
var jerryMouse;
var jerryImg;
var jerryTeasing;
var jerryHappy;

function preload() {
    bgImg = loadImage("garden.png");

    tomImg = loadImage("cat1.png");
    tomRunning = loadAnimation("cat2.png","cat3.png");
    tomHappy = loadImage("cat4.png");
    jerryImg = loadImage("mouse1.png");
    jerryTeasing = loadAnimation("mouse2.png","mouse3.png");
    jerryHappy = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    bgImage = createSprite(500,400,1000,800);
    bgImage.addImage(bgImg);
    
    tomCat = createSprite(750,620,60,70);
    tomCat.addImage(tomImg);
    tomCat.scale = 0.15;

    jerryMouse = createSprite(250,620,60,70);
    jerryMouse.addImage(jerryImg);
    jerryMouse.scale = 0.1;
}

function draw() {
    background(255);
    if(tomCat.x - jerryMouse.x < (tomCat.width - jerryMouse.width)/2){
        tomCat.addImage("tomCatHappy",tomHappy);
        tomCat.changeImage("tomCatHappy");
        tomCat.velocityX = 0;
        jerryMouse.addImage("jerryMouseHappy",jerryHappy);
        jerryMouse.changeImage("jerryMouseHappy");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        jerryMouse.addAnimation("jerryTease",jerryTeasing);
        jerryMouse.changeAnimation("jerryTease");

        tomCat.addAnimation("tomRun",tomRunning);
        tomCat.changeAnimation("tomRun");
        tomCat.scale = 0.22;
        tomCat.velocityX = -3;
    }
}
