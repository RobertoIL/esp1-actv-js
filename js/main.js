import Character from "./character.js";

//Creación de personajes
const hero = new Character("Heroe", 100, 10);
const enemy = new Character("Enemigo", 100, 10);

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

alert("INICIO PARTIDA");

// Event listener para detectar las teclas presionadas
document.addEventListener("keydown", function(event) {
  if (event.key === "x") {
    hero.setDamage(getRandomInt(10))
    hero.attack(enemy);

  } else if (event.key === "n") {
    enemy.setDamage()
    enemy.attack(hero);
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







