img=""
function preload() {
    img=loadImage("dog_cat.jpg");
}
function setup() {
    canvas=createCanvas(600,420);
    canvas.center();
}
function draw() {
    image(img,0,0,600,420);
    fill("red");
    text("dog",30,40);
    noFill();
    stroke("red");
    rect(50,60,620,420)
}