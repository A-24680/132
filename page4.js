img=""

function preload() {
    img=loadImage('th (3).jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"
}

function modelLoaded() {
    console.log('Model Loaded');
    status="true";
    objectDetector.detect(img,gotResult);

}


function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(img,0,0,640,420);
    fill("red");
    text('AC',100,70);
    noFill();
    stroke("red");
    rect(40,0,570,390);
}