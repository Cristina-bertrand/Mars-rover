// Rover Object Goes Here
var myRover = {
  direction:  "N",
  movements: "",
  commands:"",
  x: 0,
  y: 0,
travelLog: [],
};

console.log("My Rover direction" + myRover.direction);

var board = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] ];

console.log(board);

function commands (myRover){

  for(var i=0; i<10; i++){
    switch (myRover.movements(i)){
            case "r":
            turnRight (myRover);
            break;
            case "l":
            turnLeft (myRover);
            break;
            case "f":
            moveForward(myRover);
            break;
            }
  }
}
console.log ("rffrfflfrff");

function turnLeft(myRover){
  switch (direction) {
    case "N":
      myRover.direction = "W";
      break;
    case "S":
        myRover.direction = "E";
      break;
    case "E":
        myRover.direction = "N";
      break;
    case "W":
        myRover.direction = "S";
      break;
  }
  console.log (turnLeft (N));
}

function turnRight(myRover){
  switch (myRover.direction) {
    case "N":
      myRover.direction = "E";
      break;
    case "S":
        myRover.direction = "W";
      break;
    case "E":
        myRover.direction = "S";
      break;
    case "W":
        myRover.direction = "N";
      break;
  }
  console.log("turnRight was called!" + myRover.direction);
}

function moveForward(myRover){
  switch (myRover.direction) {
    case "N":
      myRover.direction = "y-1";
      break;
    case "S":
        myRover.direction = "y+1";
      break;
    case "E":
        myRover.direction = "x+1";
      break;
    case "W":
        myRover.direction = "x-1";
      break;
    default:
  }
  console.log("moveForward was called" + myRover.direction);
}
