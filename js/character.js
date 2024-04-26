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


    move(element, direction, distance) {
      var topOrLeft = (direction == "Left" || direction == "Right") ? "left" : "top";
      if (direction == "Up" || direction == "Left") { 
          distance *= -1; 
      }
      var elStyle = window.getComputedStyle(element);
      var value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
      console.log("Valor actual de " + topOrLeft + ": " + value);
      var newValue;
      if (!isNaN(distance)) { // Verificar si la distancia es un número válido
          newValue = (Number(value) + distance) + "px";
      } else {
          console.error("La distancia no es un número válido.");
          return; // Salir de la función si la distancia no es válida
      }
      console.log("Nuevo valor de " + topOrLeft + ": " + newValue);
      element.style[topOrLeft] = newValue;
  }
  
  

      bajarVida() {
        let pvr = this.health/(this.maxhealth/100)
        if(this.name == "Heroe") {
          document.getElementById("heroe-vida").style.width=pvr+"%";
          console.log('Se redujo al heroe')
        } else {
          document.getElementById("enemigo-vida").style.width=pvr+"%";
          console.log('Se redujo al enemigo')
        }
      }

    
  }
export default Character;