function Phone(brand, price, color, memory, CPU) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
	this.CPU = CPU;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". The phone also has " + this.memory + "and " + this.CPU + ".");
}

var Samsung Galaxy S6 = new Phone("Samsung", 2050, "Black", "3GB RAM", "Octa-core (4x2.1 GHz Cortex-A57 & 4x1.5 GHz Cortex-A53)");
var iPhone6S = new Phone("Apple", 2250, "White", "2GB RAM", "Dual-core 1.84 GHz");
var OnePlus One = new Phone("OnePlus", 1925, "Silver", "3GB RAM", "Quad-core 2.5 GHz Krait 400");

Samsung Galaxy S6.printInfo();
iPhone6S.printInfo();
OnePlus One.printInfo();