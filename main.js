//getting id of canvas and storing in var canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//rover's x and y position stored in var
rover_x = 10;
rover_y = 10;
var images = ["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
var random = Math.floor(Math.random()*4)
backgound_img = images[random];
//setting canvas background image
//backgound_img = "mars.jpg";
//rover's width and height
rover_width = 100;
rover_height = 90;
rover_img = "rover.png";
//we are calling function add() that is in the body
function add(){
    backgound_imgTag = new Image();
    backgound_imgTag.onload = uploadbackgroundimage;
    backgound_imgTag.src = backgound_img;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadroverimage;
    rover_imgTag.src = rover_img;
}
//we are calling function uploadbackgroundimage() that id in function add()
function uploadbackgroundimage(){
    ctx.drawImage(backgound_imgTag,0,0,canvas.width,canvas.height);
}
//we are calling function uploadbackroverimage() that id in function add()
function uploadroverimage(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    keypressed = e.keyCode;
    if(keypressed == "40"){
        down();
        console.log("up");
    }
    keypressed = e.keyCode;
    if(keypressed == "37"){
        left();
        console.log("up");
    }
    keypressed = e.keyCode;
    if(keypressed == "39"){
        right();
        console.log("up");
    }
}
function up(){
    if(rover_y >= 0){
        rover_y = rover_y-10;
        uploadbackgroundimage();
        uploadroverimage();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y+10;
        uploadbackgroundimage();
        uploadroverimage();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x-10;
        uploadbackgroundimage();
        uploadroverimage();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x+10;
        uploadbackgroundimage();
        uploadroverimage();
    }
}