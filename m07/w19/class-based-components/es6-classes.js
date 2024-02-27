  // why do we use classes?

  // 4 Pillars of OBJECT ORIENTED PROGRAMMING
  /*
    1. Abstraction: we can transform anything into an object that has properties and actions
    2. Encapsulation: each class/object contain what they need to contain, and can share things between object
    3. Inheritance: classes can extend into other classes
    4. Overcharge: being able to adapt classes and objects depending on small changes
  */

class Pet {
  // Attributes / Properties
  constructor(name, type, breed, tricks) {
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.tricks = tricks;
  }

  // Methods / Actions
  showFirstTrick() {
    return `My first trick is: ${this.tricks[0]}`
  }

  // Getters and Setters
  setName(newName) {
    // allows me to add validations!
    if (newName.length <= 2) {
      throw new Error('You should input at least 3 characters!')
    }
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}

// const pet_1 = new Pet('Jens', 'Dog', 'Sausage', ['sit', 'give paw']);
// pet_1.setName("");

// console.log(pet_1.name);

class Cat extends Pet {
  // Properties / Attributes
  constructor(name, type, breed, tricks, food) {
    super(name, type, breed, tricks);
    this.food = food;
  }

  showFirstTrick() {
    return 'whatever i want!!!';
  }
}

const cat_1 = new Cat('Toby', 'Cat', 'Egyptian', ['knocking down things'], 'Treats');

console.log(cat_1.showFirstTrick());

// This is how it's going to look in React:
class Toolbar extends Component {
  constructor() {}
}
