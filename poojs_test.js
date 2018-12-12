
function Perso (firstName, lastName, classNumber, health, healthMax, damage, exp, level) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.classNumber = classNumber, // 1 = Guerrier && 2 = Mage && 3 = Archer
	this.health = health,
	this.healthMax = healthMax, // Barre de vie de base qui est égale à 100 Points de vie
	this.damage = damage, // Dégât de base d'une valeur de 15
	this.exp = exp, // Expérience acquises allant de 0 à 100
	this.level = level, // Niveau supérieur une fois que l'expérience est à 100 && Niveau de base = 1

	this.fullName = function() {
    	return this.firstName + " " + this.lastName;
	},
	/*class : function() {
    	if (this.Classe = 1){
    		this.HealthMax = (this.HealthMax/100)*130
		}
		else if (this.Classe = 2){
			this.HealthMax = (this.HealthMax/100)*75
			this.Damage = (this.Damage/100)*130
		}
		else{
			this.Damage = (this.Damage/100)*120
		}
	}*/
	this.levelUp = function() {
		if (this.exp >= 100){
			this.level ++;
			this.exp = this.exp-100;
		}

	},
	this.coup = function(enemie){
		enemie.health -= this.damage;
	}

}

function Guerrier () {
	this.HealthMax = (this.HealthMax/100)*130;
	this.class = 1;
}
Guerrier.prototype = new Perso;

function Mage () {
	this.HealthMax = (this.HealthMax/100)*75;
	this.Damage = (this.Damage/15)*45;
	this.class = 2;
}
Mage.prototype = new Perso;

function Archer () {
	this.Damage = (this.Damage/15)*25;
	this.class = 3;
}
Archer.prototype = new Perso;

var Bill = new Mage;
	Bill.firstName = "Bill";
	Bill.lastName = "Doe";
var Tom  = new Archer;
	Tom.firstName = "Tom";
	Tom.lastName = "Doe";
var John = new Guerrier; 
	John.firstName = "John";
	John.lastName = "Doe";


var monPerso = new Perso("Bob", "Epongjjjje", 0, 100, 100, 15, 8, 7);

console.log(monPerso.fullName());
console.log(Bill.fullName());
/*
var perso2 = {
	firstName: "Bill",
	lastName : "Doe",
	Classe : 0, // 1 = Guerrier && 2 = Mage && 3 = Archer
	Health : 100, // Barre de vie de base qui est égale à 100 Points de vie
	Damage : 15, // Dégât de base d'une valeur de 15
	Exp : 0, // Expérience acquises allant de 0 à 100
	Level : 1, // Niveau supérieur une fois que l'expérience est à 100 && Niveau de base = 1
	fullName : function() {
    	return this.firstName + " " + this.lastName;
	}
		class : function() {
    	if (this.Classe = 1){
    		this.HealthMax = (this.HealthMax/100)*130
		}
		else if (this.Classe = 2){
			this.HealthMax = (this.HealthMax/100)*75
			this.Damage = (this.Damage/100)*130
		}
		else{
			this.Damage = (this.Damage/100)*120
		}
}
*/