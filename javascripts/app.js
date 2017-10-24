// Rover Object Goes Here
var myRover = {
  direction:  "N",
  movements: "",
  commands:"",
  position: [0,0],
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

function myFunction(){
var commands = prompt("Enter your commands here", "rlf");
}
myFunction ();

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
            goForward(myRover);
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

function goForward(myRover){

  switch (myRover.direction) {

    case "N":
      if(myRover.y>0 ){
         myRover.y-=1;
       }
      break;
    case "S":
        if (myRover.y<10){
          myRover.y+=1;
        }
      break;
    case "E":
    if (myRover.x<10){
      myRover.x+=1;
    }
      break;
    case "W":
    if (myRover.x<10){
      myRover.x-=1;
    }
      break;
  }
  console.log("moveForward was called" + myRover.direction);
}

function goBackward(myRover){

  switch (myRover.direction) {

    case "N":
      if(myRover.y<10 ){
         myRover.y+=1;
       }
      break;
    case "S":
        if (myRover.y>0){
          myRover.y-=1;
        }
      break;
    case "E":
    if (myRover.x>0){
      myRover.x-=1;
    }
      break;
    case "W":
    if (myRover.x>0){
      myRover.x+=1;
    }
      break;
  }
  console.log("moveForward was called" + myRover.direction);
}
