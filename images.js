//---------var images---------//
let player;
let car1;
let car2;
let car3;
let road;
//----------- sons --------------//
let hitSound;
let pointSound;
let ostSound;

function preload(){
  
  road = loadImage("images/estrada.png");
  player = loadImage("images/ator-1.png");
  car1 = loadImage("images/carro-1.png");
  car2 = loadImage("images/carro-2.png");
  car3 = loadImage("images/carro-3.png");
  carlistImages = [car1,car2,car3,car1,car2,car3]

  hitSound = loadSound("sounds/colidiu.mp3");
  pointSound = loadSound("sounds/pontos.wav");
  ostSound = loadSound("sounds/trilha.mp3");

} 
