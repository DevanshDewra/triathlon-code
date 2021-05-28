//all variables are created
var canvas, backgroundImage;
//gameState is first given the value of 0.
var gameState = 0;
//the variables for the playerCount is given
var playerCount;
//an array of all the players is created
var allPlayers;
//the distance variable is first given the value 0
var distance = 0;
//variable for database is created
var database;
//variables for form , player and game are created
var form, player, game;
//variables for all the cars of all the users is created
var runningTrack, swimmingTrack, cyclingTrack;

var racers, racer1, racer2, racer3, racer4;


//the images are preloaded
function preload(){
  runningTrack = loadImage("images/running2.jpg");
  swimmingTrack = loadImage("images/swimming.jpg");
  cyclingTrack = loadImage("images/cycling.jpg");
}

function setup(){
  //canvas is created
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //firebase is used as the databse
  database = firebase.database();
  //an object of the Game class is created
  game = new Game();
  //the getState function of the Game class is used on the game object
  game.getState();
  //start function of the Game class is used on the game object
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  //if the gameState is 1 then play function in Game class is used and clear() function is used
  if(gameState === 1){
    clear();
    game.play();
  }
}