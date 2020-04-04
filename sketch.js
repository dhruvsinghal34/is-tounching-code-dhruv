var obj2;
var obj3;
var obj4;
var obj5;
var obj6;
function setup(){
    createCanvas(600,600);
    obj6=createSprite(200,200,300,300);
    obj5=createSprite(200,200,250,250);
    obj2=createSprite(200,200,200,200);
   obj3=createSprite(200,200,150,150);
   obj4=createSprite(200,200,100,100);
}
function draw(){
    background("black");
    obj6.shapeColor="neon";
    obj5.shapeColor="blue";
    obj2.shapeColor="green";
    obj3.shapeColor="red";
    obj4.shapeColor="yellow";
    
    drawSprites();
}

