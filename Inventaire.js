function Inventaire (potionSoin, potionMana, potionForce, bonbonniv, barreExp, elexir, or) {
	this.potionSoin = potionSoin,
	this.potionMana = potionMana,
	this.potionForce = potionForce,
	this.bonbonniv = bonbonniv, 
	this.barreExp = barreExp, 
	this.elexir = elexir,
	this.or = or,

	this.acha1 = function() {
    	if (or >= 10) {
    		this.or -= 10;
    		this.potionSoin ++;
    		return this.potionSoin + " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.vie = function(utilisateur) {
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
	this.acha2 = function() {
    	if (or >= 15) {
    		this.or -= 15;
    		this.potionMana ++;
    		return this.potionMana + " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.magie = function(utilisateur) {
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
	this.acha3 = function() {
    	if (or >= 25) {
    		this.or -= 25;
    		this.potionForce ++;
    		return this.potionForce + " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.force = function(utilisateur) {
    	if (potionForce > 0) {
    		this.potionForce --;
    		utilisateur.damage += 2;
    	return utilisateur.damage;
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
	this.acha4 = function() {
    	if (or >= 100) {
    		this.or -= 100;
    		this.bonbonniv ++;
    		return this.bonbonniv+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.nivUp = function(utilisateur) {
    	if (bonbonniv > 0) {
    		this.bonbonniv --;
    		utilisateur.Up();
    	return utilisateur.level;
    	}
    	else{
    		return "vous en avez pas";
    	}
    }
    this.acha5 = function() {
    	if (or >= 50) {
    		this.or -= 50;
    		this.barreExp ++;
    		return this.barreExp+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.expplus = function(utilisateur) {
    	if (barreExp > 0) {
    		this.barreExp --;
    		utilisateur.exp = utilisateur.exp * 2;
    		utilisateur.levelUp();
    	}
    	else{
    		return "vous en avez pas";
    	}
    }

    this.acha6 = function() {
    	if (or >= 40) {
    		this.or -= 40;
    		this.elexir ++;
    		return this.elexir+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.bien = function(utilisateur) {
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