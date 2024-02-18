function setup(){
    canvas = createCanvas(500, 450);
    canvas.position(525, 35);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 85, 85, 325, 275);

    fill('#F18A99');
    stroke('#F18A99');
    rect(25, 25, 450, 15);
    rect(25, 405, 450, 15); 
    rect(30, 15, 15, 400); 
    rect(452, 15, 15, 400);  

    fill('#6A8FD4');
    stroke('#6A8FD4');
    circle(40, 35, 55);
    circle(40, 410, 55);
    circle(460, 35, 55);
    circle(460, 410, 55);
}
