video="";
objects=[];
status=""

function preload() {
    video=createVideo("video.mp4");
    video.hide();
}

function draw() {
    image(video,0,0,480,380)
if(status !=""){
objectDetector.detect(video,getresults)
document.getElementById("status").innerHTML="Status :  Objects detected";
document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected Are: "+objects.length;
for(i=0; i<objects.length;i++){
    fill("#47ed9a");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+ " "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#47ed9a");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}

}


function setup() {
    canvas=createCanvas(480,380);
    canvas.center();

}

function start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
   
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;
    video.loop();
video.speed(1);
video.volume(0);

}


function getresults(error,results) {
if(error){
    console.log(error)
}
else{
    console.log(results);
    objects=results
}
}