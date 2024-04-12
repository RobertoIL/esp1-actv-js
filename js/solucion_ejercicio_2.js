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
  if(personaje.name == "hero") {
    document.getElementById("hero").style.width=pvr+"%";
  } else {
    document.getElementById("enemy").style.width=pvr+"%";
  }
}



