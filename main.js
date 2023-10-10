var noseImage = "nada.png"

function Nariz1 () {
   noseImage = "nariz1.png"
}
function Nariz2 () {
   noseImage = "nariz2.png"
}
function Nariz3 () {
   noseImage = "nariz3.png"
}
function Nariz4 () {
   noseImage = "nariz4.png"
}
function Nariz5 () {
   noseImage = "nariz5.png"
}

function removerNariz(){
   noseImage = "nada.png"
}
noseX = 0
noseY = 0

function preload() {
clownNose = loadImage(noseImage)
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet inicializado =]');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }

}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX-30, noseY-30, 60, 60)
}

function takeSnapShot() {
    save('fotoComNariz.png');
}
