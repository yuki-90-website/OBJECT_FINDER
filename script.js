status = "";
input = document.getElementById("text");

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}
function start() {
    ml5.objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS: DETECTING OBJECTS";
}
function modelLoaded() {
    console.log("cocossd is loaded!");
    status = true;
}
function draw() {
    image(video,0, 0, 380, 380);
}
