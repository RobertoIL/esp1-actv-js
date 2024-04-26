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


    move(element, direction, area) {
      var distance = 50; 
      var topOrLeft = (direction == "Left" || direction == "Right") ? "left" : "top";
      if (direction == "Up" || direction == "Left") {
          distance *= -1;
      }
  
      var elStyle = window.getComputedStyle(element);
      var value = parseFloat(elStyle.getPropertyValue(topOrLeft).replace("px", ""));
      var newValue = value + distance;
  
      // Obtener las dimensiones del área de pelea
      var areaStyle = window.getComputedStyle(area);
      var minLimit = 0; 
      var maxLimit = (topOrLeft == "left") ? parseFloat(areaStyle.width) : parseFloat(areaStyle.height);
  
      // Ajustar el nuevo valor para mantenerse dentro de los límites
      if (newValue < minLimit) {
          newValue = minLimit;
      } else if (newValue > maxLimit - parseFloat(elStyle[(topOrLeft == "left") ? "width" : "height"])) {
          newValue = maxLimit - parseFloat(elStyle[(topOrLeft == "left") ? "width" : "height"]);
      }
  
      element.style[topOrLeft] = newValue + "px";
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
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
export default Character;