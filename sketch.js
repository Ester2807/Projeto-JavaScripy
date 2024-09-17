let palavra

function setup() {
  createCanvas(400, 400);
  palavra = palavrAleatoria ();
}

funtion palavrasAleatoria (){
  "let palavras = ["caminhante", "caminho",
 "caminhar"];
   return random(palavras)
}

funtion inicializaCores (){
  background(200);
  fill ("brack");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial (minimo, maximo){
  let quantidade = map(mouseX,minimo,maximo,1,palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function drew() {
  inicializaCores ();
  
  let parcial = palavraParcial(0, width);
  
  texr(parcial, 200, 200);
}
  
  
  
  
  
  
  
  
  
  
  
