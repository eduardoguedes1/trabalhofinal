var imagemEducador;
var imagemProgramador;
var imagemFundo;
var tela=1
var largura = 200;
var altura = 50;
var xmenu = 150;
var ymenu1 = 135;
var ymenu2 = 230;
var ymenu3 = 315;

var xmenujogo=95;
var xmenujogo2=190;
var xmenujogo3=290;
var ymenujogo=270;


var larguranum=80;
var alturanum=80;
var larguranum2=80;
var alturanum2=80;






function preload(){
  imagemEducador= loadImage('sid.jpeg')
  imagemProgramador=loadImage('edu.jpeg')
  
}

function setup() {
  createCanvas(500, 450);
  imagemFundo=loadImage('house_01.jpg')
}

function draw() {
  textStyle(NORMAL);
  //tela de menu
  if(tela == 1){
  background(imagemFundo)
  // menu com 3 opçoes
  textAlign(CENTER);
  textSize(26);
    fill(20)
  text('BRINCANDO COM NÚMEROS',250,50)  
  
    //botão iniciar
    if(mouseX >= xmenu && mouseX <= xmenu +largura && mouseY >= ymenu1 && mouseY<= ymenu1 + altura ){
    stroke(10);
    fill(230);
    rect(xmenu, ymenu1, largura, altura,15 )
    if (mouseIsPressed){ tela= 2}
     
    }
    fill(20);
    noStroke();
    text('Iniciar',250,170);
    
    
    //botão informaçoes
     if(mouseX >= xmenu && mouseX <= xmenu +largura && mouseY >= ymenu2 && mouseY<= ymenu2 + altura ){
     stroke(200);
    fill(230);
    rect(xmenu, ymenu2, largura, altura,15 )
        if (mouseIsPressed){ tela= 3}
     }
    fill(20);
    noStroke();
    text('informações',250,260); 
    
    //botão créditos
       if(mouseX >= xmenu && mouseX <= xmenu +largura && mouseY >= ymenu3 && mouseY<= ymenu3 + altura ){
     stroke(200);
    fill(230);
    rect(xmenu, ymenu3, largura, altura,15 )
          if (mouseIsPressed){ tela= 4}
     }
    fill(20);
    noStroke();
    text('créditos',250,350); 
    
    
  }
  //jogo em açao
  else if (tela == 2){
    background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('2x3+4 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){
       fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ 
      fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 5}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('9',130,320)
    text('10',230,320)
    text('11',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
    
  }
  //informações sobre o jogo
  else if (tela == 3){
    background(imagemFundo);
    fill(10);
    textSize(26);
    noStroke();
    textAlign(LEFT);
    text('Este jogo tem o objetivo fazer com que as crianças desenvolvar a ablidades básicas de matemática.',50,50,400,450)
     fill(10)
    text('aperte esc para volta a tela inicial',70,430)
    
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
  // créditos do jogo
  else if(tela==4){
      background(230);
  textSize(36);
  fill(10);
  text('créditos',250,80);
  textSize(20);
  text('Cid Lima Costa',300,130);
  text('Eduardo Guedes de Moura',300,310);
  textSize(20);
  text('Função: Educador',300,150);
  text('Função: Programador',300,330);
  textSize(14);
  fill(80);
  text('Graduando de Matemática pela Universidade Federal do Rio Grande do Norte',180,180,290,450);
  text('Estudante da turma 3B de Lógica de Programação da Universidade Federal do Rio Grande do Norte misnistrada pelo professor Orivaldo Santana ',180,350,290,450);
    image(imagemEducador,40,110,80,80)
     image(imagemProgramador,40,280,80,80)
    text('aperte esc para voltar para a tela inicial',250,20)
    
     if (keyIsDown(ESCAPE)){tela=1}
  }
  //continuação do jogo fase 2
  else if(tela==5){
   background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('12/3+6 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){
       fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 6 }
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('9',130,320)
    text('10',230,320)
    text('11',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
   //continuação do jogo fase 2
   else if(tela==6){
   background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('3x2+4-7 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 7}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ 
      fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){  fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('3',130,320)
    text('4',230,320)
    text('6',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
   //continuação do jogo fase 2
   else if(tela==7){
   background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('10x2+6/3 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 7}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ 
      fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){  fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('3',130,320)
    text('4',230,320)
    text('6',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
   //continuação do jogo fase 2
   else if(tela==8){
   background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('10x2+6/3 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 7}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ 
      fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){  fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('3',130,320)
    text('4',230,320)
    text('6',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
   //continuação do jogo fase 2
   else if(tela==9){
   background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('10x2+6/3 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 7}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ 
      fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){  fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('3',130,320)
    text('4',230,320)
    text('6',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
   //continuação do jogo fase 2
   else if(tela==10){
   background(imagemFundo);
    stroke(20);
    textSize(20)
    fill(0)
    text('aperte esc para volta a tela inicial',250,30)
    
    // calculo
    
    fill(10)
    textSize(23)
    text('escolha o número correto resultado da equação:',250,100)
    fill(230)
    rect(60, 120,350,60)
    fill(10)
    textSize(50)
    text('10x2+6/3 = ?',250,170) 
    
     //botao1
      if(mouseX >= xmenujogo && mouseX <= xmenujogo +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ tela= 7}
     
    }
   
    //botao2
       if(mouseX >= xmenujogo2 && mouseX <= xmenujogo2 +larguranum && mouseY >= ymenujogo && mouseY<= ymenujogo + alturanum ){
    stroke(10);
    fill(230);
    rect(xmenujogo2, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){ 
      fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
    //botao3
      if(mouseX >= xmenujogo3 && mouseX <= xmenujogo3 +largura && mouseY >= ymenujogo && mouseY<= ymenujogo + altura ){
    stroke(10);
    fill(230);
    rect(xmenujogo3, ymenujogo, larguranum, alturanum,15 )
    if (mouseIsPressed){  fill(255)
      textSize(23)
      text('Opção errada, tente outro numero!',250,390)}
     
    }
     // escolhas dos numeros
    textSize(50)
    fill(10)
    text('3',130,320)
    text('4',230,320)
    text('6',330,320)
    
    if (keyIsDown(ESCAPE)){tela=1}
  }
} 



    