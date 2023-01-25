//---------- var player ----------//

let xPlayer = 150;
let yPlayer = 380;
//let hit = false;
let points = 0;

function viewPlayer(){
  image(player,xPlayer,yPlayer,25,25);
}

function movePlayer(){
  if(keyIsDown(UP_ARROW)){
    yPlayer -=3
  }

  if(keyIsDown(DOWN_ARROW)){
    if(limitYaxis()){yPlayer +=3
  }
}
}

function limitYaxis(){
  return yPlayer < 375;

}

function markPoints(){
  textSize(32)
  fill(124,252,0);
  text(points,width / 5,30)
  //verifica se foi acertado e se os pontos são maior que 0 para debitar
  if(hit && points > 0){
    points -= 1;
  }
  //quando o player chega ao pixel 5 no eixo x ele marca e reseta
  if(yPlayer <= 15 ){
    points +=1;
    pointSound.play();
    pointSound.setVolume(0.1);
    resetPlayerHit();
  }
}