let palavra;
let som;
let imagem;

function setup() {
  createCanvas(500, 500);
  palavra = fabin();
  som.loop();
}

function preload(){
  imagem = loadImage("paisagem.jpg");
  som = loadSound("SOM.mp3");
}

  
function draw() {
  
  batata();
  fabin();
 
  let maximo = width;
  let minimo = 0;
 
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 250,250);
}
 function batata(){
    background("brown");
   image(imagem,0,0,500,500);
  fill("grey");
  textSize(80);
  textAlign(CENTER,CENTER);
 }

function fabin(){
  let palavras =
  ["sozinho","anoitecer","eu te amo","não chore"];
  return random(palavras);
}