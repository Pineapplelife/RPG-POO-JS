//une classe inventaire
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
    	}
    	else{
    		return "vous en avez pas";
    	}
    }

    this.acha6 = function() { // pour acheter une potion de soin complet
    	if (or >= 40) {
    		this.or -= 40;
    		this.elexir ++;
    		return this.elexir+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.bien = function(utilisateur) {// pour utiliser une potion de soin complet
    	if (elexir > 0) {
    		this.elexir--;
    		utilisateur.health = utilisateur.healthMax;
    		utilisateur.mana = utilisateur.manaMax;
    	return utilisateur.health;
    	return utilisateur.mana;
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
}

var Sac = new Inventaire(3, 2, 0, 0, 0, 1, 100);// création de l'objet sac a partir d'inventaire