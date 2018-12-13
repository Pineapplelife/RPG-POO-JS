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
    		this.or -= 10
    		this.potionSoin += 1
    		return this.potionSoin + " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
	this.acha2 = function() {
    	if (or >= 15) {
    		this.or -= 15
    		this.potionMana += 1
    		return this.potionMana + " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
	this.acha3 = function() {
    	if (or >= 25) {
    		this.or -= 25
    		this.potionForce += 1
    		return this.potionForce + " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
	this.acha4 = function() {
    	if (or >= 100) {
    		this.or -= 100
    		this.bonbonniv += 1
    		return this.bonbonniv+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.acha5 = function() {
    	if (or >= 50) {
    		this.or -= 50
    		this.barreExp += 1
    		return this.barreExp+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }
    this.acha6 = function() {
    	if (or >= 40) {
    		this.or -= 40
    		this.elexir += 1
    		return this.elexir+ " " + this.or;
    	}
    	else{
    		return this.or + " Degage le clodo";
    	}
    }