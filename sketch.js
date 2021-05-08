const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var yellowLine;

var divisionHeight = 260;
var score = 0;
var turn = 0;

var PLAY = 1;
var END = 0;
var gameState = "PLAY";

var bg;

function preload()
{
    bg = loadImage("bg.jpg");
}

function setup() 
{
    createCanvas(800, 736);

    engine = Engine.create();
    world = engine.world;

    for (var k = 4; k <=width; k = k + 72) 
    {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 25; j <=width; j=j+50) 
    {    
        plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {    
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 25; j <=width; j=j+50) 
    {    
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {    
        plinkos.push(new Plinko(j,375));
    }    
}

function draw() 
{
    background(bg);

    fill("white");
    textSize(25);
    text("Score: " + score, 20, 40);
    text("Turn: " + turn, 700, 40);

    text("500", 20, 500);
    text("300", 92, 500);
    text("200", 164, 500);
    text("100", 236, 500);
    text("50", 313, 500);
    text("10", 385, 500);
    text("50", 457, 500);
    text("100", 524, 500);
    text("200", 596, 500);
    text("300", 668, 500);
    text("500", 740, 500);
    
    Engine.update(engine);

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 5 && particle.body.position.x < 72)
            {
                score = score + 500;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 72 && particle.body.position.x < 144)
            {
                score = score + 300;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 144 && particle.body.position.x < 216)
            {
                score = score + 200;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 216 && particle.body.position.x < 288)
            {
                score = score + 100;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 288 && particle.body.position.x < 360)
            {
                score = score + 50;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 360 && particle.body.position.x < 432)
            {
                score = score + 10;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 432 && particle.body.position.x < 504)
            {
                score = score + 50;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 504 && particle.body.position.x < 576)
            {
                score = score + 100;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 576 && particle.body.position.x < 648)
            {
                score = score + 200;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 648 && particle.body.position.x < 720)
            {
                score = score + 300;
                particle = null;
            }
        }
    }

    if(particle!= null)
    {
        particle.display();

        if(particle.body.position.y > 730)
        {
            if(particle.body.position.x >= 720 && particle.body.position.x < 792)
            {
                score = score + 500;
                particle = null;
            }
        }
    }
    
    for (var i = 0; i < plinkos.length; i++) 
    {     
        plinkos[i].display();      
    }

    for (var k = 0; k < divisions.length; k++) 
    {      
        divisions[k].display();
    }

    fill("yellow");
    rect(400, 450, 800, 5);

    if(turn === 5)
    {
        gameState = "END";
    }

    if(gameState === "END")
    {
        fill("red");
        textSize(50);
        text("GAME OVER", 250, 250);
        turn = turn + 0;
    }
}

function mousePressed()
{
    if(gameState === "PLAY")
    {
        particle = new Particle(mouseX, 10, 10);
        turn++;
    }    
}