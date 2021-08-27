// variable declare
var gameState=0;
var maze, mazeImg;
var player, playerImg;
var startButton, startButtonImg;
var decayedTeeth, decayedTeethImg//use for game over
var gameOver, gameOverImg
var restart, restartImg;
var division1, division2, division3, division4, division5, division6, division7, division8, division9, division10, division11, division12, division13, division14, division15, division16, division17, division18, division19, division20;
var  division21, division22, division23, division24, division25, division26, division27, division28, division29, division30, division31, division32, division33, division34, division35, division36, division36, division37, division38, division39, division40;
var mouth, mouthImg;
var homeScreen, homeScreenImg;//the home page with words on
var toothGif, toothGifImg;
var scene, sceneImg;//the blue and white dentist background
var dentalArrPosition = [[295, 100],[295, 300],[335, 800],[335, 400]];
var mazePosition = [[400, 110, 10, 150],[299, 150, 70, 10]]
var grpDivision;
var score = 0;
var heart1, heart1Img, heart2Img
var lives, livesImg

var feedBack, feedBackImg
var goodFeedback1, goodFeedback1Img, goodFeedback2, goodFeedback2Img, goodFeedback3, goodFeedback3Img;

var candy1, candy1Img, candy2, candy2Img, candy3, candy3Img, candy4, candy4Img;
var candy5, candy5Img, candy6, candy6Img, candy7, candy7Img, candy8, candy8Img;
var candyGrp;
var healthy1, healthy1Img, healthy2, healthy2Img, healthy3, healthy3Img, healthy4, healthy4Img ; 
var healthyGrp;

var box

var lifeleft = 2;
var flagPosition =0;

function preload(){
  toothGifImg = loadImage("toothGif.gif");
  toothGif = loadImage("toothGif.gif");

  mazeImg = loadImage("tooth.png");
  decayedTeethImg = loadImage("decayedTeeth.png")
  playerImg = loadImage("player.png");
  mouthImg = loadImage("mouth.png");
  startButtonImg = loadImage("start.png");
  homeScreenImg = loadImage("homePage.png");
  sceneImg = loadImage("background.jpeg");

  candy1Img = loadImage("sweets1.png");
  candy2Img = loadImage("sweets2.png");
  candy3Img = loadImage("sweets3.png");
  candy4Img = loadImage("sweets4.png");
  candy5Img = loadImage("badFood1.png");
  candy6Img = loadImage("badFood2.png");
  candy7Img = loadImage("badFood3.png");
  candy8Img = loadImage("badFood4.png");

  healthy1Img = loadImage("goodFood1.png");
  healthy2Img = loadImage("goodFood2.png");
  healthy3Img = loadImage("goodFood3.png");
  healthy4Img = loadImage("goodFood4.png");

  feedBackImg = loadImage("livesLeftImg.png");//bad feedback

  heart1Img = loadImage("hearts1.png");
  heart2Img = loadImage("hearts1.png");
  livesImg = loadImage("lives.png");

  goodFeedback1Img = loadImage("goodFeedback1.png");//yay!
  goodFeedback2Img = loadImage("goodFeedback2.png");//wow!
  goodFeedback3Img = loadImage("goodFeedback3.png");//well done!

  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}


function setup(){
  createCanvas(600, 700);

  scene = createSprite(250, 350, 1000, 1200);
  scene.addImage(sceneImg);

  //giant tooth
  maze = createSprite(250, 350, 200, 200);
  maze.addImage(mazeImg);
  maze.scale = 2;

  // Maze structure creation
  mazeCreation()
  
  //smaller tooth you control
  player = createSprite(140, 550, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.04;
  player.visible = true

  
  grpDivision = new Group();

  candyGrp = createGroup();
  candy1 = createSprite(350, 120, 10, 10);//pink, blue and white sweet
  candy1.addImage(candy1Img);
  candy1.scale = 0.25
  candy1.setCollider("rectangle",0,0,0, 0);
  candy1.debug = false
  candyGrp.add(candy1)
  candy2 = createSprite(170, 300, 10, 10);//cupcake
  candy2.addImage(candy2Img);
  candy2.scale = 0.25
  candy2.setCollider("rectangle",0,0,0, 0);
  candy2.debug = false
  candyGrp.add(candy2)
  candy3 = createSprite(200, 130, 10, 10);//blue and yellow sweet
  candy3.addImage(candy3Img);
  candy3.scale = 0.4
  candy3.setCollider("rectangle",0,0,0, 0);
  candy3.debug = false
  candyGrp.add(candy3)
  candy4 = createSprite(70, 120, 10, 10);//pink and white sweet
  candy4.addImage(candy4Img);
  candy4.scale = 0.25
  candy4.setCollider("rectangle",0,0,0, 0);
  candy4.debug = false
  candyGrp.add(candy4)
  candy5 = createSprite(330, 280, 10, 10);//blue ice cream
  candy5.addImage(candy5Img);
  candy5.scale = 0.4
  candy5.setCollider("rectangle",0,0,0, 0);
  candy5.debug = false
  candyGrp.add(candy5)
  candy6= createSprite(400, 340, 10, 10);//red ice lolly
  candy6.addImage(candy6Img);
  candy6.scale = 0.5
  candy6.setCollider("rectangle",0,0,0, 0);
  candy6.debug = false
  candyGrp.add(candy6)
  candy7 = createSprite(350, 570, 10, 10);//burger 
  candy7.addImage(candy7Img);
  candy7.scale = 0.4
  candy7.setCollider("rectangle",0,0,0, 0);
  candy7.debug = false
  candyGrp.add(candy7)
  candy8 = createSprite(100, 450, 10, 10);//coke
  candy8.addImage(candy8Img);
  candy8.scale = 0.4
  candy8.setCollider("rectangle",0,0,0, 0);
  candy8.debug = false
  candyGrp.add(candy8)

  
  healthy1 = createSprite(220, 300, 10, 10);//fish
  healthy1.addImage(healthy1Img);
  healthy1.scale = 0.4;
  healthy1.setCollider("rectangle",0,0,2, 2);
  healthy1.debug = false
  healthy2 = createSprite(350, 480, 10, 10);//apple
  healthy2.addImage(healthy2Img);
  healthy2.scale = 0.4;
  healthy2.setCollider("rectangle",0,0,2, 2);
  healthy2.debug = false
  healthy3 = createSprite(410, 200, 10, 10);//water bottle
  healthy3.addImage(healthy3Img);
  healthy3.scale = 0.4;
  healthy3.setCollider("rectangle",0,0,2, 2);
  healthy3.debug = false
  healthy4 = createSprite(230, 230, 10, 10);//carrot
  healthy4.addImage(healthy4Img);
  healthy4.scale = 0.4;
  healthy4.setCollider("rectangle",0,0,2, 2);
  healthy4.debug = false

  box = createSprite(530, 540, 150, 150);
  box.shapeColor = "pink";

  mouth = createSprite(140, 590, 20, 20);
  mouth.addImage(mouthImg);
  mouth.scale = 0.19;

  lives = createSprite(520, 570, 20, 20);
  lives.addImage(livesImg);
  lives.scale = 0.2;

  heart1 = createSprite(530, 600, 20, 20);
  heart1.addImage(heart1Img);
  heart1.scale = 0.2;
  heart1.visible = true;

  heart2 = createSprite(580, 600, 20, 20);
  heart2.addImage(heart1Img);
  heart2.scale = 0.2;
  heart1.visible = true;

  feedBack = createSprite(300, 350);
  feedBack.addImage(feedBackImg);
  feedBack.scale = 0.5
  feedBack.visible = false

  
  goodFeedback1 = createSprite(50, 50);
  goodFeedback1.addImage(goodFeedback1Img);
  goodFeedback1.scale = 0.55
  goodFeedback1.visible = false

  goodFeedback2 = createSprite(550, 200);
  goodFeedback2.addImage(goodFeedback2Img);
  goodFeedback2.scale = 0.55
  goodFeedback2.visible = false

  goodFeedback3 = createSprite(520, 400);
  goodFeedback3.addImage(goodFeedback3Img);
  goodFeedback3.scale = 0.55
  goodFeedback3.visible = false

  gameOver = createSprite(280, 350, 1000, 1200);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.54
  gameOver.visible = false

  restart = createSprite(400, 640);
  restart.addImage(restartImg);
  restart.scale = 0.1
  restart.visible = false

  homeScreen = createSprite(300, 350);
  homeScreen.addImage(homeScreenImg);
  homeScreen.visible = true
  homeScreen.scale = 0.51;

  // Button to start the game
  startButton = createSprite(250, 640 ,200 ,50);
  startButton.visible = true;
  startButton.addImage(startButtonImg);
  startButton.scale = 0.4;

}

function draw() {
  background(79, 200, 233);

  if (frameCount%100 === 0 && flagPosition === 0){
    candy1.x += 20;
    candy2.y -=20;
    flagPosition = 1;
  }
  else if (frameCount%120 === 0 && flagPosition === 1){
    flagPosition = 0;
    candy1.x -= 10;
    candy2.y +=10;
    candy3.y -=10;
    candy4.y +=10;
    candy5.y -=10;
    candy6.y +=10;
    candy7.x +=10;
    candy8.x -=10;
    healthy1.y -=10;
    healthy2.x +=10;
    healthy3.y +=10;
    healthy4.x +=10;
  }

  if (mousePressedOver(startButton)&&gameState===0) {
    startButton.visible = false;
    console.log(gameState);
    gameState=1;
    candy3.y +=10;
    candy4.y -=10;
    candy5.y +=10;
    candy6.y -=10;
    candy7.x +=10;
    candy8.x +=10;
    healthy1.y +=10;
    healthy2.x -=10;
    healthy3.y -=10;
    healthy4.x -=10;
    homeScreen.visible = false
  }  
  


   if(player.isTouching(healthy1)){
    score = score+1;
    healthy1.destroy();
    goodFeedback1.visible = true
  }
if(player.isTouching(healthy2)){
    score = score+1
    healthy2.destroy()
    goodFeedback2.visible = true
  }

  if(player.isTouching(healthy3)){
    score = score+1
    healthy3.destroy()
    goodFeedback3.visible = true
  }

  if(player.isTouching(healthy4)){
    score = score+1
    healthy4.destroy()
    goodFeedback1.visible = true
  }
 

  if(player.isTouching(candyGrp)){
    for (var i = 0; i < candyGrp.length; i++) {
      //console.log(candyGrp.get(i))
      if (player.isTouching(candyGrp.get(i))){
       // console.log(tempCandy);
       var tempCandy = candyGrp.get(i);
       tempCandy.destroy();
        lifeleft-=1;
        //console.log(lifeleft);
      }
    }
    if (lifeleft === 1 )
      heart1.visible = false;

      else if (lifeleft === 0 )
        heart2.visible = false;
  }

  if(lifeleft === 1){
    feedBack.visible = true
    feedBack.lifetime = 2;
  }
  if(lifeleft === 0){
    gameOver.visible = true
    restart.visible = true
  }
  if(score == 5){
    gameOver.visible = true
    restart.visible = true
  }

  if (mousePressedOver(restart)) {
    startButton.visible = true;
    gameState=0;
    homeScreen.visible = true
    gameOver.visible = false
    restart.visible = false
    candy1.x = 130;
    candy2.y =300;
    candy3.y =130;
    candy4.y = 120;
    candy5.y =280;
    candy6.y =340;
    candy7.x =350;
    candy8.x =100;
    score === 0
    lifeleft = 2
    player.visible = true
    feedBack.visible = false
    goodFeedback1.visible = false
    goodFeedback2.visible = false
    goodFeedback3.visible = false
    player.x = 140;
    player.y = 550;
  }  
  

  
 
  if (keyDown("up")) {
    player.y-=3;
  }
  if (keyDown("down")) {
    player.y+=3;
  }
  if (keyDown("left")) {
    player.x-=3;
  }
  if (keyDown("right")) {
    player.x+=3;  }  

    //if (condition1 || condition2 || condition3) or we can add a group
  /* 0,1,2,3
  var randPosLeft = Math.round.random(0,1)
  var randPosRight = Math.round.random(2,3)

  depending on value change the y position 
  dentist2.x = dentalArrPosition[randPosRight][0].x
  dentist2.y = dentalArrPosition[randPosRight][1].y
  */
if(player.isTouching(division1)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division2)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division3)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division4)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division5)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division6)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division7)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division8)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division9)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division11)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division13)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division14)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division15)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }

  if(player.isTouching(division17)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division18)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division19)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division20)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division21)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division22)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division23)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division24)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division25)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division26)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division27)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division28)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division29)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division30)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division31)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division32)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division33)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division34)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }
  if(player.isTouching(division35)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }

  if(player.isTouching(division36)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }

  if(player.isTouching(division37)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }

  if(player.isTouching(division38)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }

  if(player.isTouching(division39)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }

  if(player.isTouching(division40)){
    player.visible = false
    gameOver.visible = true
    restart.visible = true
  }












  if(candy1.isTouching(division1)||candy2.isTouching(division1)||candy3.isTouching(division1)||candy4.isTouching(division1)||candy5.isTouching(division1)||candy6.isTouching(division1)||candy7.isTouching(division1)||candy8.isTouching(division1)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division2)||candy2.isTouching(division2)||candy3.isTouching(division2)||candy4.isTouching(division2)||candy5.isTouching(division2)||candy6.isTouching(division2)||candy7.isTouching(division2)||candy8.isTouching(division2)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division3)||candy2.isTouching(division3)||candy3.isTouching(division3)||candy4.isTouching(division3)||candy5.isTouching(division3)||candy6.isTouching(division3)||candy7.isTouching(division3)||candy8.isTouching(division3)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division4)||candy2.isTouching(division4)||candy3.isTouching(division4)||candy4.isTouching(division4)||candy5.isTouching(division4)||candy6.isTouching(division4)||candy7.isTouching(division4)||candy8.isTouching(division4)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division5)||candy2.isTouching(division5)||candy3.isTouching(division5)||candy4.isTouching(division5)||candy5.isTouching(division5)||candy6.isTouching(division5)||candy7.isTouching(division5)||candy8.isTouching(division5)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division6)||candy2.isTouching(division6)||candy3.isTouching(division6)||candy4.isTouching(division6)||candy5.isTouching(division6)||candy6.isTouching(division6)||candy7.isTouching(division6)||candy8.isTouching(division6)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division7)||candy2.isTouching(division7)||candy3.isTouching(division7)||candy4.isTouching(division7)||candy5.isTouching(division7)||candy6.isTouching(division7)||candy7.isTouching(division7)||candy8.isTouching(division7)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division8)||candy2.isTouching(division8)||candy3.isTouching(division8)||candy4.isTouching(division8)||candy5.isTouching(division8)||candy6.isTouching(division8)||candy7.isTouching(division8)||candy8.isTouching(division8)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division9)||candy2.isTouching(division9)||candy3.isTouching(division9)||candy4.isTouching(division9)||candy5.isTouching(division9)||candy6.isTouching(division9)||candy7.isTouching(division9)||candy8.isTouching(division9)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division10)||candy2.isTouching(division10)||candy3.isTouching(division10)||candy4.isTouching(division10)||candy5.isTouching(division10)||candy6.isTouching(division10)||candy7.isTouching(division10)||candy8.isTouching(division10)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division11)||candy2.isTouching(division11)||candy3.isTouching(division11)||candy4.isTouching(division11)||candy5.isTouching(division11)||candy6.isTouching(division11)||candy7.isTouching(division11)||candy8.isTouching(division11)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  
  if(candy1.isTouching(division13)||candy2.isTouching(division13)||candy3.isTouching(division13)||candy4.isTouching(division13)||candy5.isTouching(division13)||candy6.isTouching(division13)||candy7.isTouching(division13)||candy8.isTouching(division13)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division14)||candy2.isTouching(division14)||candy3.isTouching(division14)||candy4.isTouching(division14)||candy5.isTouching(division14)||candy6.isTouching(division14)||candy7.isTouching(division14)||candy8.isTouching(division14)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division15)||candy2.isTouching(division15)||candy3.isTouching(division15)||candy4.isTouching(division15)||candy5.isTouching(division15)||candy6.isTouching(division15)||candy7.isTouching(division15)||candy8.isTouching(division15)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  
  if(candy1.isTouching(division17)||candy2.isTouching(division17)||candy3.isTouching(division17)||candy4.isTouching(division17)||candy5.isTouching(division17)||candy6.isTouching(division17)||candy7.isTouching(division17)||candy8.isTouching(division17)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division18)||candy2.isTouching(division18)||candy3.isTouching(division18)||candy4.isTouching(division18)||candy5.isTouching(division18)||candy6.isTouching(division18)||candy7.isTouching(division18)||candy8.isTouching(division18)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division19)||candy2.isTouching(division19)||candy3.isTouching(division19)||candy4.isTouching(division19)||candy5.isTouching(division19)||candy6.isTouching(division19)||candy7.isTouching(division19)||candy8.isTouching(division19)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division20)||candy2.isTouching(division20)||candy3.isTouching(division20)||candy4.isTouching(division20)||candy5.isTouching(division20)||candy6.isTouching(division20)||candy7.isTouching(division20)||candy8.isTouching(division20)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division21)||candy2.isTouching(division21)||candy3.isTouching(division21)||candy4.isTouching(division21)||candy5.isTouching(division21)||candy6.isTouching(division21)||candy7.isTouching(division21)||candy8.isTouching(division21)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division22)||candy2.isTouching(division22)||candy3.isTouching(division22)||candy4.isTouching(division22)||candy5.isTouching(division22)||candy6.isTouching(division22)||candy7.isTouching(division22)||candy8.isTouching(division22)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division23)||candy2.isTouching(division23)||candy3.isTouching(division23)||candy4.isTouching(division23)||candy5.isTouching(division23)||candy6.isTouching(division23)||candy7.isTouching(division23)||candy8.isTouching(division23)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division24)||candy2.isTouching(division24)||candy3.isTouching(division24)||candy4.isTouching(division24)||candy5.isTouching(division24)||candy6.isTouching(division24)||candy7.isTouching(division24)||candy8.isTouching(division24)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division25)||candy2.isTouching(division25)||candy3.isTouching(division25)||candy4.isTouching(division25)||candy5.isTouching(division25)||candy6.isTouching(division25)||candy7.isTouching(division25)||candy8.isTouching(division25)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division26)||candy2.isTouching(division26)||candy3.isTouching(division26)||candy4.isTouching(division26)||candy5.isTouching(division26)||candy6.isTouching(division26)||candy7.isTouching(division26)||candy8.isTouching(division26)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division27)||candy2.isTouching(division27)||candy3.isTouching(division27)||candy4.isTouching(division27)||candy5.isTouching(division27)||candy6.isTouching(division27)||candy7.isTouching(division27)||candy8.isTouching(division27)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division28)||candy2.isTouching(division28)||candy3.isTouching(division28)||candy4.isTouching(division28)||candy5.isTouching(division28)||candy6.isTouching(division28)||candy7.isTouching(division28)||candy8.isTouching(division28)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division29)||candy2.isTouching(division29)||candy3.isTouching(division29)||candy4.isTouching(division29)||candy5.isTouching(division29)||candy6.isTouching(division29)||candy7.isTouching(division29)||candy8.isTouching(division29)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division30)||candy2.isTouching(division30)||candy3.isTouching(division30)||candy4.isTouching(division30)||candy5.isTouching(division30)||candy6.isTouching(division30)||candy7.isTouching(division30)||candy8.isTouching(division30)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division31)||candy2.isTouching(division31)||candy3.isTouching(division31)||candy4.isTouching(division31)||candy5.isTouching(division31)||candy6.isTouching(division31)||candy7.isTouching(division31)||candy8.isTouching(division31)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }
  if(candy1.isTouching(division32)||candy2.isTouching(division32)||candy3.isTouching(division32)||candy4.isTouching(division32)||candy5.isTouching(division32)||candy6.isTouching(division32)||candy7.isTouching(division32)||candy8.isTouching(division32)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division33)||candy2.isTouching(division33)||candy3.isTouching(division33)||candy4.isTouching(division33)||candy5.isTouching(division33)||candy6.isTouching(division33)||candy7.isTouching(division33)||candy8.isTouching(division33)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division34)||candy2.isTouching(division34)||candy3.isTouching(division34)||candy4.isTouching(division34)||candy5.isTouching(division34)||candy6.isTouching(division34)||candy7.isTouching(division34)||candy8.isTouching(division34)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division35)||candy2.isTouching(division35)||candy3.isTouching(division35)||candy4.isTouching(division35)||candy5.isTouching(division35)||candy6.isTouching(division35)||candy7.isTouching(division35)||candy8.isTouching(division35)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division37)||candy2.isTouching(division37)||candy3.isTouching(division37)||candy4.isTouching(division37)||candy5.isTouching(division37)||candy6.isTouching(division37)||candy7.isTouching(division37)||candy8.isTouching(division37)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division38)||candy2.isTouching(division3)||candy3.isTouching(division3)||candy4.isTouching(division3)||candy5.isTouching(division3)||candy6.isTouching(division3)||candy7.isTouching(division3)||candy8.isTouching(division3)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division39)||candy2.isTouching(division39)||candy3.isTouching(division39)||candy4.isTouching(division39)||candy5.isTouching(division39)||candy6.isTouching(division39)||candy7.isTouching(division39)||candy8.isTouching(division39)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  if(candy1.isTouching(division40)||candy2.isTouching(division40)||candy3.isTouching(division40)||candy4.isTouching(division40)||candy5.isTouching(division40)||candy6.isTouching(division40)||candy7.isTouching(division40)||candy8.isTouching(division40)){
    candy1.x = 350
    candy1.y = 123
    candy2.x = 170
    candy2.y = 300
    candy3.x = 200
    candy3.y = 130
    candy4.x = 70
    candy4.y = 120
    candy5.x = 330
    candy5.y = 280
    candy6.x = 400
    candy6.y = 340
    candy7.x = 350
    candy7.y = 570
    candy8.x = 100
    candy8.y = 450
  }

  


  

  drawSprites();

  if (gameState===0){
    startButton.visible = true
  }

  textSize(20)
  stroke("black");
  fill("black")
    text("Score: "+score, 500, 500)

  

}

function mazeCreation(){
  //the division to the right of the pink and white sweet
 division1 = createSprite(110, 115, 5, 75);//35 pixel gap
  division1.shapeColor="black";

  //division directly under the pink and white sweet
  division2 = createSprite(50, 150, 35, 5);
  division2.shapeColor="black"; 

//done
   division3 = createSprite(100, 200, 70, 5);
  division3.shapeColor="black";
  
//done
  division4 = createSprite(40, 115, 5, 70);
  division4.shapeColor="black";
  
//done
  division5 = createSprite(100, 240, 5, 75);
  division5.shapeColor="black";
  
  //done
  division6 = createSprite(160, 100, 100, 5);
  division6.shapeColor="black";

  //done
  division7 = createSprite(170, 150, 5, 100);//50 pixel gap
  division7.shapeColor="black";
  
  //done
  division8 = createSprite(440, 200, 5, 300);
  division8.shapeColor="black";
  
//done
  division9 = createSprite(100, 310, 100, 5);
  division9.shapeColor="black";
  
//done
  division10 = createSprite(150, 250, 100, 5);
  division10.shapeColor="black";
 
 //done
  division11 = createSprite(150, 310, 5, 50);
  division11.shapeColor="black";

  //done
  division13 = createSprite(95, 520, 50, 5);
  division13.shapeColor="black";
  
  //done
  division14 = createSprite(120, 486, 5, 70);
  division14.shapeColor="black";
  

//done
  division15 = createSprite(72, 420, 5, 300);
  division15.shapeColor="black";
  
//done
  division17 = createSprite(120, 410, 5, 100);
  division17.shapeColor="black";
  
//done
  division18 = createSprite(250, 350, 5, 150);
  division18.shapeColor="black";
  
//done
  division19 = createSprite(180, 400, 60, 5);
  division19.shapeColor="black";
  
  //done
  division20 = createSprite(180, 450, 5, 60);
  division20.shapeColor="black";
  
//done
  division21 = createSprite(200, 297, 5, 100);//50 pixel gap
  division21.shapeColor="black";
  
  
  //done
  division22 = createSprite(300, 200, 180, 5);
  division22.shapeColor="black";
  
  
//done
  division23 = createSprite(300, 325, 5, 150);
  division23.shapeColor="black";
 

  //done
  division24 = createSprite(250, 50, 370, 5);
  division24.shapeColor="black";
  
  
//done
  division25 = createSprite(350, 100, 100, 5);
  division25.shapeColor="black";
  
 //done
  division26 = createSprite(300, 100, 5, 100);
  division26.shapeColor="black";
  
//done
  division27 = createSprite(250, 125, 5, 150);
  division27.shapeColor="black";
  
  //done
  division28 = createSprite(300, 450, 75, 5);
  division28.shapeColor="black";
 
   
  //done
  division29 = createSprite(300, 400, 100, 5);//50 pixel gap
  division29.shapeColor="black";
  
  //done
  division30 = createSprite(360, 600, 110, 5);
  division30.shapeColor="black";
  
  //done
  division31 = createSprite(320, 520,5, 160);//50 pixel gap
  division31.shapeColor="black";
 
   
//done
  division32 = createSprite(420, 520, 5, 175);
  division32.shapeColor="black";

//done
  division33 = createSprite(370, 300, 5, 135);
  division33.shapeColor="black";

  //done
  division34 = createSprite(370, 520, 30, 5);
  division34.shapeColor="black";

//done
  division35 = createSprite(40, 200, 5, 200);
  division35.shapeColor="black";

//done
  division36 = createSprite(60, 70, 5, 30);
  division36.shapeColor="black";

  //done
  division37 = createSprite(55, 82, 20, 5);
  division37.shapeColor="black";

  //done
  division38 = createSprite(55, 273, 30, 5);
  division38.shapeColor="black";

  //done
  division39 = createSprite(140, 620, 100, 5);
  division39.shapeColor="black";

  //done
  division40 = createSprite(195, 500, 5, 200);
  division40.shapeColor="black";

  //done
  division41 = createSprite(250, 400, 100, 5);
  division41.shapeColor="black";

  //done
  division40 = createSprite(80, 590, 5, 50);
  division40.shapeColor="black";

  division40 = createSprite(430, 400, 5, 100);
  division40.shapeColor="black";

}

feedBack
function destroyHeart1(){
  if(player.isTouching(candy1)){
    heart1.destroy()
      }
  if(player.isTouching(candy2)){
    heart1.destroy()
      }
  if(player.isTouching(candy3)){
    heart1.destroy()
      }
  if(player.isTouching(candy4)){
    heart1.destroy()
      }
  if(player.isTouching(candy5)){
    heart1.destroy()
      }
  if(player.isTouching(candy6)){
    heart1.destroy()
      }
  if(player.isTouching(candy7)){
    heart1.destroy()
      }
  if(player.isTouching(candy8)){
    heart1.destroy()
      }

}


function destroyHeart2(){
  if(player.isTouching(candy1)){
    heart2.destroy()
      }
  if(player.isTouching(candy2)){
    heart2.destroy()
      }
  if(player.isTouching(candy3)){
    heart2.destroy()
      }
  if(player.isTouching(candy4)){
    heart2.destroy()
      }
  if(player.isTouching(candy5)){
    heart2.destroy()
      }
  if(player.isTouching(candy6)){
    heart2.destroy()
      }
  if(player.isTouching(candy7)){
    heart2.destroy()
      }
  if(player.isTouching(candy8)){
    heart2.destroy()
      }

}

function destroyHeart3(){
  if(player.isTouching(candy1)){
    heart3.destroy()
      }
  if(player.isTouching(candy2)){
    heart3.destroy()
      }
  if(player.isTouching(candy3)){
    heart3.destroy()
      }
  if(player.isTouching(candy4)){
    heart3.destroy()
      }
  if(player.isTouching(candy5)){
    heart3.destroy()
      }
  if(player.isTouching(candy6)){
    heart3.destroy()
      }
  if(player.isTouching(candy7)){
    heart3.destroy()
      }
  if(player.isTouching(candy8)){
    heart3.destroy()
      }

}

