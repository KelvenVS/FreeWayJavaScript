function setup() {
  createCanvas(600, 400);
  ostSound.setVolume(0.03);
  ostSound.loop();
  
}

function draw() {
  
  background(road);
  viewPlayer();
  movePlayer();
  viewCar();
  moveCar();
  resetCar();
  checkColision();
  markPoints();
  
  
}