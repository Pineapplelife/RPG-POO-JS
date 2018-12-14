const aventure = document.getElementById("aventure");
const taperButton = document.getElementById("shop");
const shopButton = document.getElementById("int");

var time;
var day = true;
//constructeur des persos
function Perso (firstName, lastName, classNumber, health, healthMax, mana, manaMax, damage, exp, level) {
	this.firstName = firstName, // prenom du personage
	this.lastName = lastName, // Nom du personage
	this.classNumber = classNumber, // 1 = Guerrier && 2 = Mage && 3 = Archer
	this.health = health, // Barre de vie de base 
	this.healthMax = healthMax, // Vie max
	this.mana = mana, // Barre de Mana de base 
	this.manaMax = manaMax, // Mana max
	this.damage = damage, // Dégât de base d'une valeur de 15
	this.exp = exp, // Expérience acquises allant de 0 à 100
	this.level = level, // Niveau supérieur une fois que l'expérience est à 100 && Niveau de base = 1

// fonction pour aficher le nom
	this.fullName = function() { 
    	return this.firstName + " " + this.lastName;
	}
// fonction pour donner un coup
	this.coup = function(enemie){
		enemie.health -= this.damage;
		return enemie.firstName + " " + enemie.health;
		info()
	}
// Fonction pour recuper toute sa vie
	this.soin = function(){
		this.health = this.healthMax;
		return this.health;
	}
//fonction pour recuperer des recompence
	this.victory = function(drop){
		this.exp += Math.floor(Math.random(1) * Math.floor(10));
		return "tu as" + this.exp;
		drop.or += Math.floor(Math.random(5) * Math.floor(20));
		return "tu as" + drop.or;
		info()
	}

}
// classe Pour les perso guerrier
function Guerrier () {
	this.levelUp = function(){//fonction pour la monter de Niveau avec Exp
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
			info()
		}
		else{
			return "tu as" + this.exp;
		}
	}
	this.Up = function(){//fonction pour la monter de Niveau
		this.level ++;
		this.healthMax += 55;
		this.manaMax += 20;
		this.damage += 5;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 1;
		return this.level;
		info()
	}
}
Guerrier.prototype = new Perso;// la class guerrier herite de la class perso

// classe Pour les perso mage
function Mage () {
	this.levelUp = function(){//fonction pour la monter de Niveau avec Exp
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
			info()
		}
		else{
			return "tu as" + this.exp;
		}
	}
	this.Up = function(){//fonction pour la monter de Niveau
		this.level ++;
		this.healthMax += 25;
		this.manaMax += 30;
		this.damage += 20;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 2;
		return this.level;
		info()
	}
}
Mage.prototype = new Perso();// la class mage herite de la class perso

// classe Pour les perso archer
function Archer () {
	this.levelUp = function(){//fonction pour la monter de Niveau avec Exp
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
			info()
		}
		else{
			return "tu as" + this.exp;
		}
	}
	this.Up = function(){//fonction pour la monter de Niveau
		this.level ++;
		this.healthMax += 30;
		this.manaMax += 15;
		this.damage += 15;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 3;
		return this.level;
		info()
	}
}
Archer.prototype = new Perso();// la class archer herite de la class perso

// classe Pour les perso berserker
function Berserker () {
	this.levelUp = function(){//fonction pour la monter de Niveau avec Exp
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
			info()
		}
		else{
			return "tu as" + this.exp ;
		}
	}
	this.Up = function(){//fonction pour la monter de Niveau
		this.level ++;
		this.healthMax += 36;
		this.manaMax += 10;
		this.damage += 10;
		this.healthMax = parseInt(this.healthMax);
		this.damage = parseInt(this.damage);
		this.classNumber = 4;
		return this.level;
		info()
	}
}
Berserker.prototype = new Perso();// la class berserker herite de la class perso

function Monster () {// la class monstre herite de la class perso
	this.getm = function(){
		this.firstName = this.firstName[hasard(0,22)];
		this.lastName = this.lastName[hasard(0,8)];
		this.health = this.health + (10 * this.level);
		this.healthMax = this.healthMax + (10 * this.level);
		this.mana = this.mana + (8 * this.level);
		this.manaMax = this.manaMax + (8 * this.level);
		this.damage = this.damage + (5 * this.level);
		this.level ++;
	}
}
Monster.prototype = new Perso();// la class monstre herite de la class perso

var Bill = new Mage();//objet du nom de bill
	Bill.firstName = "Weiss";
	Bill.lastName = "Winter";
	Bill.classNumber = 0;
	Bill.health = 100;
	Bill.healthMax = 100;
	Bill.mana = 50;
	Bill.manaMax = 50;
	Bill.damage = 15;
	Bill.exp = 0;
	Bill.level = 1;

var Tom  = new Archer();//objet du nom de tom
	Tom.firstName = "Blake";
	Tom.lastName = "Belladona";
	Tom.classNumber = 0;
	Tom.health = 100;
	Tom.healthMax = 100;
	Tom.mana = 50;
	Tom.manaMax = 50;
	Tom.damage = 15;
	Tom.exp = 0;
	Tom.level = 1;

var John = new Guerrier();//objet du nom de john
	John.firstName = "Ruby";
	John.lastName = "Rose";
	John.classNumber = 0;
	John.health = 100;
	John.healthMax = 100;
	John.mana = 50;
	John.manaMax = 50;
	John.damage = 15;
	John.exp = 0;
	John.level = 1;

var Ruby = new Berserker();//objet du nom de ruby
	Ruby.firstName = "Yang";
	Ruby.lastName = "Xiao";
	Ruby.classNumber = 0;
	Ruby.health = 100;
	Ruby.healthMax = 100;
	Ruby.mana = 50;
	Ruby.manaMax = 50;
	Ruby.damage = 15;
	Ruby.exp = 0;
	Ruby.level = 1;

var Rick = new Monster();//objet du nom de rick
	Rick.firstName = ["Slime", "Gobelin","Squelette","Armure_Maudite","Hogobelin","Ogre","Troll","Lamia","Succube","Lord","Dalek","Sith","Joker","Thanos","Magicarpe","Bowser","Bowsette","Sauron","Rick","Gozilla","King_Kong","Ganon"];
	Rick.lastName = ["de bois", "de pierre", "de fer", "d'acier", "de bronze", "d'argent", "d'or", "de platine", "de diamant"];
	Rick.classNumber = 0;
	Rick.health = 50;
	Rick.healthMax = 50;
	Rick.mana = 30;
	Rick.manaMax = 30;
	Rick.damage = 5;
	Rick.exp = 0;
	Rick.level = 0;

var Kev = new Monster();//objet du nom de kev
	Kev.firstName = ["Slime", "Gobelin","Squelette","Armure_Maudite","Hogobelin","Ogre","Troll","Lamia","Succube","Lord","Dalek","Sith","Joker","Thanos","Magicarpe","Bowser","Bowsette","Sauron","Rick","Gozilla","King_Kong","Ganon"];
	Kev.lastName = ["de bois", "de pierre", "de fer", "d'acier", "de bronze", "d'argent", "d'or", "de platine", "de diamant"];
	Kev.classNumber = 0;
	Kev.health = 60;
	Kev.healthMax = 50;
	Kev.mana = 30;
	Kev.manaMax = 30;
	Kev.damage = 5;
	Kev.exp = 0;
	Kev.level = 0;

var Pom = new Monster();//objet du nom de Pom
	Pom.firstName = ["Slime", "Gobelin","Squelette","Armure_Maudite","Hogobelin","Ogre","Troll","Lamia","Succube","Lord","Dalek","Sith","Joker","Thanos","Magicarpe","Bowser","Bowsette","Sauron","Rick","Gozilla","King_Kong","Ganon"];
	Pom.lastName = ["de bois", "de pierre", "de fer", "d'acier", "de bronze", "d'argent", "d'or", "de platine", "de diamant"];
	Pom.classNumber = 0;
	Pom.health = 40;
	Pom.healthMax = 40;
	Pom.mana = 30;
	Pom.manaMax = 30;
	Pom.damage = 15;
	Pom.exp = 0;
	Pom.level = 0;

function Inventaire (potionSoin, potionMana, potionForce, bonbonniv, barreExp, elexir, or) {
	this.potionSoin = potionSoin,
	this.potionMana = potionMana,
	this.potionForce = potionForce,
	this.bonbonniv = bonbonniv, 
	this.barreExp = barreExp, 
	this.elexir = elexir,
	this.or = or,

	this.acha1 = function() {// pour acheter une potion de soin
    	if (or >= 10) {
    		this.or -= 10;
    		this.potionSoin ++;
    		return this.potionSoin + " " + this.or;
    		info()
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.vie = function(utilisateur) {// pour utiliser une potion de soin
    	if (potionSoin > 0) {
    		this.potionSoin --;
    		utilisateur.health += 20;
    		if (utilisateur.health > utilisateur.healthMax) {
    			utilisateur.health = utilisateur.healthMax;
    		}
    	return utilisateur.health;
    	info()
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
	this.acha2 = function() {// pour acheter une potion de mana
    	if (or >= 15) {
    		this.or -= 15;
    		this.potionMana ++;
    		return this.potionMana + " " + this.or;
    		info()
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.magie = function(utilisateur) {// pour utiliser une potion de mana
    	if (potionMana > 0) {
    		this.potionMoin --;
    		utilisateur.mana += 10;
    		if (utilisateur.mana > utilisateur.manaMax) {
    			utilisateur.mana = utilisateur.manaMax;
    		}
    	return utilisateur.mana;
    	info()
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
	this.acha3 = function() {// pour acheter une potion de force
    	if (or >= 25) {
    		this.or -= 25;
    		this.potionForce ++;
    		return this.potionForce + " " + this.or;
    		info()
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.force = function(utilisateur) {// pour utiliser une potion de force
    	if (potionForce > 0) {
    		this.potionForce --;
    		utilisateur.damage += 2;
    	return utilisateur.damage;
    	info()
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
	this.acha4 = function() {// pour acheter un bonbon niv
    	if (or >= 100) {
    		this.or -= 100;
    		this.bonbonniv ++;
    		return this.bonbonniv+ " " + this.or;
    		info()
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.nivUp = function(utilisateur) { // pour utiliser un bonbon niv
    	if (bonbonniv > 0) {
    		this.bonbonniv --;
    		utilisateur.Up();
    	return utilisateur.level;
    	info()
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
    this.acha5 = function() {// pour acheter une barre d'exp
    	if (or >= 50) {
    		this.or -= 50;
    		this.barreExp ++;
    		return this.barreExp+ " " + this.or;
    		info()
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.expplus = function(utilisateur) {// pour utiliser une barre d'exp
    	if (barreExp > 0) {
    		this.barreExp --;
    		utilisateur.exp = utilisateur.exp * 2;
    		utilisateur.levelUp();
    		info()
    	}
    	else{
    		return "vous en avez pas";
    	}
    }

    this.acha6 = function() { // pour acheter une potion de soin complet
    	if (or >= 40) {
    		this.or -= 40;
    		this.elexir ++;
    		string = this.elexir+ " " + this.or;
    		info()
    	}
    	else{
    		string = this.or + " Degage le clodo";
    	}
    }
    this.bien = function(utilisateur) {// pour utiliser une potion de soin complet
    	if (elexir > 0) {
    		this.elexir--;
    		utilisateur.health = utilisateur.healthMax;
    		utilisateur.mana = utilisateur.manaMax;
    	string = utilisateur.health;
    	string = utilisateur.mana;
    	info()
    	}
    	else{
    		string = "vous en avez pas";
    	}
    }
}

var sac = new Inventaire(3, 2, 0, 0, 0, 1, 0);// création de l'objet sac a partir d'inventaire

function info(){
	document.getElementById("info").innerHTML = "<table><tr><td>"+John.firstName+" "+John.lastName+"</td><td>	</td><td>"+Bill.firstName+" "+Bill.lastName+"</td><td>	</td><td>"+Tom.firstName+" "+Tom.lastName+"</td><td>	</td><td>"+Ruby.firstName+" "+Ruby.lastName+"</td></tr><tr><td>Guerrier</td><td>	</td><td>Mage </td><td>	</td><td>Assasin </td><td>	</td><td>Berserker</td></tr><tr><td>Niv:"+John.level+"</td><td>	</td><td>Niv:"+Bill.level+"</td><td>	</td><td>Niv:"+Tom.level+"</td><td>	</td><td>Niv:"+Ruby.level+"</td></tr><tr><td>PV:"+John.health+"/"+John.healthMax+"</td><td>	</td><td>PV:"+Bill.health+"/"+Bill.healthMax+"</td><td>	</td><td>PV:"+Tom.health+"/"+Tom.healthMax+"</td><td>	</td><td>PV:"+Ruby.health+"/"+Ruby.healthMax+"</td></tr><tr><td>PM:"+John.mana+"/"+John.manaMax+"</td><td>	</td><td>PM:"+Bill.mana+"/"+Bill.manaMax+"</td><td>	</td><td>PM:"+Tom.mana+"/"+Tom.manaMax+"</td><td>	</td><td>PM:"+Ruby.mana+"/"+Ruby.manaMax+"</td></tr><tr><td>Atk:"+John.damage+"</td><td>	</td><td>Atk:"+Bill.damage+"</td><td>	</td><td>Atk:"+Tom.damage+"</td><td>	</td><td>Atk:"+Ruby.damage+"</td></tr></table>" ;
	document.getElementById("info").innerHTML +="<br><br><table><tr><td>Potion de Soin</td><td>Potion de Mana</td><td>Potion de Force</td><td>Elexir</td><td>Barre Exp</td><td>Bonbon Niveau</td><td>Or</td></tr><tr><td>"+sac.potionSoin+"</td><td>"+sac.potionMana+"</td><td>"+sac.potionForce+"</td><td>"+sac.elexir+"</td><td>"+sac.barreExp+"</td><td>"+sac.bonbonniv+"</td><td>"+sac.or+"</td></tr></table>";
}

function shop(){

}

function menu(){

}

function inventaire(){

}

function combat(){
	
}

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
  console.log(Ruby.coup(Tom));
  console.log(Tom.coup(Ruby));
}
info.innerHTML ="tutututu tututu tutututu tutu"