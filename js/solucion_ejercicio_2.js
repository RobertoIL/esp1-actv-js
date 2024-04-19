//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
  constructor(name, health, damage) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = damage;
  }
  setDamage(damage) {
    this.damage = damage;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
    target.health -= this.damage;
    
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;

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
  move(document.getElementById("enemigo"),str, document.getElementById("area-pelea"));
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
    move(document.getElementById("heroe"),str, document.getElementById("area-pelea"));
  }
  console.log(str);
});

function move(element, direction, parentElement,distance=10) {
  var topOrLeft = (direction=="Left" || direction=="Right") ? "left" : "top";
  if (direction=="Up" || direction=="Left"){ distance *= -1; }
  var elStyle = window.getComputedStyle(element);
  var value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
  element.style[topOrLeft] = (Number(value) + distance) + "px";
}

function isLimit(element, parentElement, direction){
  var topLimit
}


//Creación de personajes
const hero = new Character("Heroe", getRandomInt(100), 1);
const enemy = new Character("Limo", getRandomInt(100), 1);
alert("Hero: " + hero.health + "HP" + "\n" + "Limo: " + enemy.health + "HP");

//Comenzar combate
fight(hero, enemy);

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


// Función para el ataque del héroe
function ataqueHero() {
  hero.setDamage(getRandomInt(5))
  if (hero.isAlive() && enemy.isAlive()) {
    hero.attack(enemy);
    bajarVida(enemy);
    console.log(hero.status());
    console.log(enemy.status());
    if (!enemy.isAlive()) {
      console.log(`${enemy.name} murió!`);
    }
  }
}
// Función para el ataque del enemigo
function ataqueEnemy() {
  enemy.setDamage(getRandomInt(5))
  if (hero.isAlive() && enemy.isAlive()) {
    enemy.attack(hero);
    bajarVida(hero);
    console.log(hero.status());
    console.log(enemy.status());
    if (!hero.isAlive()) {
      console.log(`${hero.name} murió!`);
    }
  }
}

function bajarVida(personaje) {
  let pvr = personaje.health/(personaje.maxhealth/100)
  if(personaje.name == "Heroe") {
    document.getElementById("hero").style.width=pvr+"%";
    console.log('Se redujo al heroe')
  } else {
    document.getElementById("enemy").style.width=pvr+"%";
    console.log('Se redujo al enemigo')
  }
}




