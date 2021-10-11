function setup(){
    canvas = createCanvas(300,275);
    canvas.position(500,120);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/G9RRlzYC4/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    image(video,0,0,300,300)
}