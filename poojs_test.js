
function Perso (firstName, lastName, classNumber, health, healthMax, damage, exp, level) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.classNumber = classNumber, // 1 = Guerrier && 2 = Mage && 3 = Archer
	this.health = health,
	this.healthMax = healthMax, // Barre de vie de base qui est égale à 100 Points de vie
	this.mana = mana
	this.manaMax = manaMax
	this.damage = damage, // Dégât de base d'une valeur de 15
	this.exp = exp, // Expérience acquises allant de 0 à 100
	this.level = level, // Niveau supérieur une fois que l'expérience est à 100 && Niveau de base = 1

	this.fullName = function() {
    	return this.firstName + " " + this.lastName;
	},

	this.coup = function(enemie){
		enemie.health -= this.damage;
		return enemie.firstName + " " + enemie.health;
	}
	this.soin = function(){
		this.health = this.healthMax;
		return this.health;
	}
	this.victory = function(drop){
		this.exp += Math.floor(Math.random(1) * Math.floor(10));
		return "tu as" + this.exp;
		drop.or += Math.floor(Math.random(5) * Math.floor(20));
		return "tu as" + drop.or;
	}

}

function Guerrier () {
	this.levelUp = function(){
		if (this.exp >= 100){
			this.level ++;
			this.exp -= 100;
			this.healthMax += 55;
			this.manaMax += 20;
			this.damage += 5;
			this.healthMax = parseInt(this.healthMax);
			this.damage = parseInt(this.damage);
			this.classNumber = 1;
			return this.level;
		}
		else{
			return "tu as" + this.exp;
		}
	}
	this.Up = function(){
		this.level ++;
		this.healthMax += 55;
		this.manaMax += 20;
		this.damage += 5;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 1;
		return this.level;
	}
}
Guerrier.prototype = new Perso;

function Mage () {
	this.levelUp = function(){
		if (this.exp >= 100){
			this.level ++;
			this.exp -= 100;
			this.healthMax += 25;
			this.manaMax += 30;
			this.damage += 20;
			this.healthMax = parseInt(this.healthMax);
			this.damage = parseInt(this.damage);
			this.classNumber = 2;
			return this.level;
		}
		else{
			return "tu as" + this.exp;
		}
	}
	this.Up = function(){
		this.level ++;
		this.healthMax += 25;
		this.manaMax += 30;
		this.damage += 20;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 2;
		return this.level;
	}
}
Mage.prototype = new Perso;

function Archer () {
	this.levelUp = function(){
		if (this.exp >= 100){
			this.level ++;
			this.exp -= 100;
			this.healthMax += 30;
			this.manaMax += 15;
			this.damage += 15;
			this.healthMax = parseInt(this.healthMax);
			this.damage = parseInt(this.damage);
			this.classNumber = 3;
			return this.level;
		}
		else{
			return "tu as" + this.exp;
		}
	}
	this.Up = function(){
		this.level ++;
		this.healthMax += 30;
		this.manaMax += 15;
		this.damage += 15;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 3;
		return this.level;
	}
}
Archer.prototype = new Perso;

function Berserker () {
	this.levelUp = function(){
		if (this.exp >= 100){
			this.level ++;
			this.exp -= 100;
			this.healthMax += 36;
			this.manaMax += 10;
			this.damage += 10;
			this.healthMax = parseInt(this.healthMax);
			this.damage = parseInt(this.damage);
			this.classNumber = 4;
			return this.level;
		}
		else{
			return "tu as" + this.exp ;
		}
	}
	this.Up = function(){
		this.level ++;
		this.healthMax += 36;
		this.manaMax += 10;
		this.damage += 10;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 4;
		return this.level;
	}
}
Berserker.prototype = new Perso;

var Bill = new Mage();
	Bill.firstName = "Bill";
	Bill.lastName = "Doe";
	Bill.classNumber = 0;
	Bill.health = 100;
	Bill.healthMax = 100;
	Bill.mana = 50;
	Bill.manaMax = 50;
	Bill.damage = 15;
	Bill.exp = 0;
	Bill.level = 1;

var Tom  = new Archer();
	Tom.firstName = "Tom";
	Tom.lastName = "Doe";
	Tom.classNumber = 0;
	Tom.health = 100;
	Tom.healthMax = 100;
	Tom.mana = 50;
	Tom.manaMax = 50;
	Tom.damage = 15;
	Tom.exp = 0;
	Tom.level = 1;

var John = new Guerrier();
	John.firstName = "John";
	John.lastName = "Doe";
	John.classNumber = 0;
	John.health = 100;
	John.healthMax = 100;
	John.mana = 50;
	John.manaMax = 50;
	John.damage = 15;
	John.exp = 0;
	John.level = 1;

var Ruby = new Berserker();
	Ruby.firstName = "Ruby";
	Ruby.lastName = "rose";
	Ruby.classNumber = 0;
	Ruby.health = 100;
	Ruby.healthMax = 100;
	Ruby.mana = 50;
	Ruby.manaMax = 50;
	Ruby.damage = 15;
	Ruby.exp = 0;
	Ruby.level = 1;


console.log(Tom.fullName());
console.log(John.fullName());
console.log(Ruby.fullName());

Ruby.exp += 100;
console.log(Ruby.levelUp());
Ruby.exp += 20;
console.log(Ruby.levelUp());
Ruby.exp += 100;
console.log(Ruby.levelUp());
console.log(Ruby.soin());
while (Ruby.health > 0 && Tom.health > 0) {
  console.log(Ruby.coup(Tom))
  console.log(Tom.coup(Ruby))
}
console.log(Ruby.victory())
