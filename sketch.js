var ball;
var database,position;


function setup(){
database = firebase.database();
console.log(database);
    createCanvas(500,500);

    var hypnoticball = database.ref('ball/position') 
    hypnoticball.on("value",readPosition,showError)
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";
    
}

function draw(){
    background("white");
if(keyDown(UP_ARROW)){
    writePosition (0,-1)
}
if(keyDown(DOWN_ARROW)){
    writePosition(0,1)
}

if (keyDown(LEFT_ARROW)){
    writePosition(-1,0)
}
    if(keyDown(RIGHT_ARROW)){
        writePosition(1,0)
    }
    
    drawSprites();
}

function changeposition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y ;
}  

function writePosition(x,y){
    database.ref("ball/position").set({
      'x': position.x+x,
      'y' : position.y+y

    })
}   
function readPosition(data){
    position = data.val()
console.log(position.x)
ball.x = position.x;
ball.y = position.y;


}

function showError(){
console.log('Error in writing to the database')
}