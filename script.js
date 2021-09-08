var x = 50;
var y = 50;
speedX = 2;
speedY = 2;



/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
 createCanvas(1280, 720);

  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
 
 // Kleur de achtergrond blauw, zodat je het kunt zien
 background('blue');
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x,y,80,80);


  x = x + speedX;
  y = y + speedY;

  if (x === 0 || 1280){
    speedX = speedX * -1
  }
  f (x === 0 || 720){
    speedY = speedY * -1
  }
}
