// The main script

var ctx;
var WIDTH;
var HEIGHT;

var dx = 20;
var dy = 20;
var dr = 10;

// 0: left
// 1: up
// 2: right
// 3: down
var direction;

var snake;
var size;

var food;

var id;


function gamerun() {
	//entry point
  init();
}

function step(){
  update();
  draw();
}

function update() {
  if (!movesnake()) {
    alert("Game over. Final size: " + size);
    die();
  }
}

function draw() {
  screenclear();
  drawsnake();
  drawfood();
}

function init() {
// get page data
	  ctx = $('#canvas')[0].getContext("2d");
	  WIDTH = $("#canvas").width();
	  HEIGHT = $("#canvas").height();

// initialize the sanek and food
	  createsnake();
	  newfood();

	  // initial size (1) and direction (left)
	  direction = 0;
	  size = 1;

	  // enter the main loop
	  id = setInterval(step, 100);
	}