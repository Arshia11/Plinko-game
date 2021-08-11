const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint= Matter.MouseConstraint
const Mouse=Matter.Mouse


var particle;


var score =0;
var count = 0;
var ground
var division
var divisions=[];
var plinkos=[];
var particles=[];
var divisionHeight=300;


function setup() {
  createCanvas(820,800);
  engine = Engine.create();
  world = engine.world;
  for(var k=0;k<=width ;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 20; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,50));
  }

  for (var j = 40; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,135));
  }

   for (var j = 20; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,220));
  }

   for (var j =40; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,305));
  }






  ground=new Ground(200,800,800,20)
  division=new Division(200,600,20,700)
  
  
}


function draw() {
  background(0); 
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  
 
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  
  for (var k = 0; k < divisions.length; k++) {
      
    divisions[k].display();
  }
  
 

    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }
    if(particle!=null)
    {
       particle.display();
    
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 820 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }  
              ground.display();
        }
            }
          }


    function mousePressed()
    {
       count++;
         particle=new Particle(mouseX, 10, 10, 10); 
      }   
    

 

    
  
  

