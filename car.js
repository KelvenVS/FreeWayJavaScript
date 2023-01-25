//-------- var car---------//
let xCars = [600,600,600,600,600,600]
let yCars = [40,95,150,210,260,315]
let speedCarlist = [5,3,4,1,6.7,8]
let lengthCar = 60;
let widthCar = 40;

function viewCar(){
  for(let i = 0 ; i < carlistImages.length ; i++){
    //funcão .length mede o comprimento da lista ,1° posição = 0 
    //vai executar 3 vez o código abaixo
  image(carlistImages[i],xCars[i],yCars[i],lengthCar, widthCar);
  }
}

function moveCar(){
  for(i = 0; i < carlistImages.length; i++){
  xCars[i] -= speedCarlist[i];
    //xCars[i] -= speedCarlist[i];
    //xCars uam segunda vez aumenta ainda mais a velocidade
  }
}

function resetCar(){
  for(i = 0; i < carlistImages.length; i++){
    
  if(checkCarScreen(xCars[i])){
    xCars[i] = 700;
      }
    }
  }

function checkCarScreen(xCars){
  return xCars < - 70;
  // -70 pq o carro tem 60 de comprimento
  //retornar true para verificar o if de reset car
}

function checkColision(){
  //hit = collideRectRect(200, 200, 100, 150, mouseX, mouseY, 50, 75);
  for(let i = 0; i < carlistImages.length ; i++ ){
    hit = collideRectRect(xCars[i],yCars[i],lengthCar,widthCar, xPlayer, yPlayer,lengthCar/2, widthCar/2 )
    //retorna um true e ativa o if
    if(hit){
      console.log("Hit!!!!!");
      hitSound.play();
      hitSound.setVolume(0.03);
      if(points > 0 ) points -=1;
      resetPlayerHit();
    }
  }
}

function resetPlayerHit(){
  yPlayer = 390;
}
