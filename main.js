var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

player_object="";

function player_update(){
    fabric.Image.fromURL("Screenshot 2021-06-18 093412.png",function(Img){

        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){

        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({

            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(e.shiftKey==true && keypressed=='80'){

    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if(e.shiftKey==true && keypressed=='77'){

    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if(keypressed=='37'){
    left();
    console.log("left");
}

if(keypressed=='38'){
    up();
    console.log("up");
}

if(keypressed=='39'){
    right();
    console.log("right");
}

if(keypressed=='40'){
    down();
    console.log("down");
}

if(keypressed=='70'){
    new_image('spiderman_face.png');
    console.log("f");
}

if(keypressed=='66'){
    new_image('ironman_body.png');
    console.log("b");
}
if(keypressed=='76'){
    new_image('hulk_legs.png');
    console.log("l");
}

if(keypressed=='82'){
    new_image('hulk_right_hand.png');
    console.log("r");
}
if(keypressed=='72'){
    new_image('captain_america_left_hand.png');
    console.log("h");
}



}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=800){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}