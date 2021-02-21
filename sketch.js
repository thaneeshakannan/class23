const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
   function setup()
    { createCanvas(800,400); 
    engine = Engine.create();
     world = engine.world; 
     var object_options = { isStatic : true } 
     object = Bodies.rectangle(100,350,400,50, object_options);
      World.add(world,object);
      var ball_options ={
        restitution:1.0
      }
      ball=Bodies.circle(100,100,20,ball_options);
      World.add(world,ball);
       console.log(object);
        // createSprite(400, 200, 50, 50);
      }
         function draw() { 
           background(0); 
        Engine.update(engine);
         rectMode(CENTER);
         rect(object.position.x,object.position.y,400,50); 
         ellipseMode(RADIUS);
         ellipse(ball.position.x,ball.position.y,20,20);
         //rect(200,200,100,100); // drawSprites(); 
        }

