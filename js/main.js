import Character from "./character.js";

//Creación de personajes
const hero = new Character("Heroe", 100, 10);
const enemy = new Character("Enemigo", 100, 10);


alert("INICIO PARTIDA");

// Event listener para detectar las teclas presionadas
document.addEventListener("keydown", function(event) {
  if (event.key === "x") {
    if (detectarColision()) {
      hero.setDamage(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
      hero.attack(enemy);
      actualizarBarraVida(enemy, "enemigo-vida");
    }

  } else if (event.key === "n") {
    if (detectarColision()) {
      enemy.setDamage(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
      enemy.attack(hero);
      actualizarBarraVida(hero, "heroe-vida")
      
    }
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
    default:
      return;
  }
  hero.move(document.getElementById("enemigo"),str, document.getElementById("area-pelea"));
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
    default:
      return;
  }
  if(str != "") {
    enemy.move(document.getElementById("heroe"),str ,document.getElementById("area-pelea"));
  }
  console.log(str);
});

function actualizarBarraVida(personaje, barraVida) {
  let porcentajeVida = (personaje.health / personaje.maxhealth) * 100;
  document.getElementById(barraVida).style.width = porcentajeVida + "%";
}

function detectarColision() {
  var heroePosition = document.getElementById("heroe").getBoundingClientRect();
  var enemigoPosition = document.getElementById("enemigo").getBoundingClientRect();

  if (heroePosition.left < enemigoPosition.right && heroePosition.right > enemigoPosition.left &&
      heroePosition.top < enemigoPosition.bottom && heroePosition.bottom > enemigoPosition.top) {
      return true;
  } else return false;
}

setInterval(detectarColision, 100); // Esto comprueba la colisión cada 100 milisegundos









