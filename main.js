noseX=0
noseY=0

function preload(){
    mustache=loadImage("https://i.postimg.cc/9fN7BSKm/download-3-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(400,300)
    canvas.center()
    //Accesing the webcam
    video=createCapture(VIDEO)
    video.hide()
    video.size(400,300)
    //Initialising the poseNet
    poseNet=ml5.poseNet(video,modelLoaded)
    //Excution of the PoseNet
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is Initialised")
}

function draw(){
    image(video,0,0,400,300)
    image(mustache,noseX,noseY,100,30)
}

function t_snapshot(){
    save("My_Filter_Image.png")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x-50;
        noseY=results[0].pose.nose.y+5;
        console.log("nose x="+results[0].pose.nose.x)
        console.log("nose y="+results[0].pose.nose.y)
    }
}