const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch("https://worldtimeapi.org/api/timezone/America/Chicago")
    //change the data in JSON format
    var responseJSON = await time.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset

    if (hour >4 && hour <= 6){
        bg = "sunrise1.png";
    }

    if (hour > 6 && hour <= 8){
        bg = "sunrise2.png";
    }

    if (hour >8 && hour <=10){
        bg = "sunrise3.png";
    }

    if (hour >10 && hour <=12){
        bg = "sunrise5.png";
    }
    if (hour >12 && hour <=14){
        bg = "sunrise6.png";
    }

    if (hour >14 && hour <=16){
        bg = "sunset7.png";
    }
    if (hour >16 && hour <=18){
        bg = "sunset8.png";
    }
    if (hour >20 && hour <=22){
        bg = "sunset9.png";
    }
    if (hour >22 && hour <=24){
        bg = "sunset10.png";
    }
    if (hour >= 0 && hour <=2){
        bg = "sunset11.png";
    }
    if (hour >2 && hour <=4){
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
