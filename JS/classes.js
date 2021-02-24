// CLASSES & OOP

// create the class
class Animal {
  constructor(name, height, weight) {
    console.log("created an animal named", name);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  nameLength() {
    return this.name.length;
  }
}

// CONSTRUCTOR
// constructor runs everytime we create an animal. method calls itself soon as animal is created

// THIS
// the this key word refers to the objects created, e.g. wolf and hamster
// paramaters aren't usable outside consructure without 'this'

// INSTANCE VARAIBLES
// instantiate the class / create an object that uses the created class a blue print
// instanstiate uisng keyword 'new' and class name.

// PARAMETERS
// Make it unique by passing parameters into the consructor then filling out in the instantation

var wolf = new Animal("fido", 25, 90);

var hamster = new Animal("lola", 3, 1);

console.log(wolf.nameLength());

// CLASS VARIABLES
// This is an example of a class level variable & how to call it
// 'wolf' is the animal, will print 'Earth' to console
// Oject name . constuctor . whatever the variable is you want, in this case its planet
Animal.planet = "Earth";
console.log(hamster.constructor.planet);

// EXTENDING CLASSES
// helps to differentiate between the objects created and their characteristics
//created a class named Dog that inherits all of the above from the Animal class using extends keyword
// to instantiate the object as an Animal and have access to all the properties and methods in the animal class, call a 'super' consructor

class Dog extends Animal {
  constructor(name, height, weight, barkVolume, leashColor, speed) {
    super(name, height, weight);
    this.barkVolume = barkVolume;
    this.leashColor = leashColor;
    this.speed = speed;
  }

  bark() {
    if (this.barkVolume > 50) {
      console.log(this.name, "barks loudly! (volume of:", this.barkVolume, ")");
    } else {
      console.log(this.name, "barks quietly");
    }
  }
}

var king = new Dog("King", 45, 92, 55, "pink", 85);
king.bark();

class Fish extends Animal {
  constructor(name, height, weight, swimSpeed) {
    super(name, height, weight);
    this.swimSpeed = swimSpeed;
  }

  swim(chaserSpeed) {
    if (this.swimSpeed > 50) {
      console.log(
        this.name,
        "swims quickly at a speed of",
        this.swimSpeed + "pH"
      );
    } else {
      console.log(
        this.name,
        "swims slowly at a speed of",
        this.swimSpeed + "pH"
      );
    }
    if (this.swimSpeed > chaserSpeed) {
      console.log(this.name, "survived!");
    } else {
      console.log(this.name, "was eaten!");
    }
  }
}

var nemo = new Fish("Nemo", 1, 2, 58);
nemo.swim(king.speed);
