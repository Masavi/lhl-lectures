class Dairy {
  constructor(typeArg, ageYearsArg, farm, flavour, milkFat) {
    // attributes/properties
    this.type = typeArg;
    this.ageYears = ageYearsArg;
    this.farm = farm;
    this.flavour = flavour;
    this.milkFat = milkFat;
  }

  // method (function inside the class/object)
  presentation() {
    return `${this.type} has an age of ${this.ageYears} years, and has a ${this.flavour} flavour `;
  }
}

const milk = new Dairy('milk', 1, 'Lighthouse Farms', 'chocolate', 25);
const cheese = new Dairy('cheese', 10, 'Lon Lon Ranch', 'parmigian', 90);

// console.log(milk.presentation());
// console.log(cheese.presentation());

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 25);
console.log(rectangle.area());
