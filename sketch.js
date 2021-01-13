const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var ground, wall1, wall2, wall3, wall4, wall5, wall6, wall7;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(400,650);
 engine = Engine.create();
 world = engine.world;

 wall1 = new Division(200,height,10,400)
 wall2 = new Division(100,height,10,400)
 wall3 = new Division(300,height,10,400)
 wall4 = new Division(395,height,10,400)
 wall5 = new Division(5,height,10,400)
 ground = new Division(200,height,400,20)

 for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background(0);
  wall1.display(); 
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  ground.display(); 

  for (var i = 0; i < plinkos.length; i++){  
    plinkos[i].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

}