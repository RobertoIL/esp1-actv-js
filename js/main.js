import Character from "./character.js";

//Creación de personajes
const hero = new Character("Heroe", 100, 10);
const enemy = new Character("Enemigo", 100, 10);

alert("INICIO PARTIDA")

if (hero.isAlive() && !enemy.isAlive()) {
  alert("GAME OVER\nGANA HEROE");
}
if (enemy.isAlive() && !hero.isAlive()) {
  alert("GAME OVER\nGANA ENEMIGO");
}


// Función para el ataque del héroe
function ataqueHero() {
  if (hero.isAlive() && enemy.isAlive()) {
    hero.attack(enemy);
    hero.bajarVida();
    console.log(hero.status());
    console.log(enemy.status());
    if (!enemy.isAlive()) {
      console.log(`${enemy.name} murió!`);
    }
  }
}


// Función para el ataque del enemigo
function ataqueEnemy() {
  if (hero.isAlive() && enemy.isAlive()) {
    enemy.attack(hero);
    enemy.bajarVida();
    console.log(hero.status());
    console.log(enemy.status());
    if (!hero.isAlive()) {
      console.log(`${hero.name} murió!`);
    }
  }
}

// Event listener para detectar las teclas presionadas
document.addEventListener("keydown", function(event) {
  if (event.key === "x") {
    ataqueHero(); 
  } else if (event.key === "n") {
    ataqueEnemy(); 
  }
});

document.addEventListener("keydown", function(event){
  var str;
  switch(event.key){
    case "ArrowLeft":
      str = 'Left';
      break;
    case "ArrowRight":
      str = 'Right'; 
      break;
    case "ArrowUp":
      str = 'Up';
      break;
    case "ArrowDown":
      str = 'Down';
      break;
    case Default:
      break;
  }
  hero.move(document.getElementById("enemigo"),str, 10);
  console.log(str);
});
document.addEventListener("keydown", function(event){
  var str = "";
  switch(event.key){
    case "a":
      console.log(event)
      str = 'Left';
      break;
    case "d":
      str = 'Right'; 
      break;
    case "w":
      str = 'Up';
      break;
    case "s":
      str = 'Down';
      break;
    case Default:
      break;
  }
  if(str != "") {
    enemy.move(document.getElementById("heroe"),str, 10);
  }
  console.log(str);
});

// Event listener para detectar las teclas presionadas
document.addEventListener("keydown", function(event) {
  if (event.key === "x") {
    ataqueHero(); 
  } else if (event.key === "n") {
    ataqueEnemy(); 
  }
});






