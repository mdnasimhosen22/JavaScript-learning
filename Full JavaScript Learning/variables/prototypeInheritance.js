function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Cricketer(name, age, type, country) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototyp = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};
Cricketer.prototype = Object.create(Person.prototyp);
Cricketer.prototype.constructor = Cricketer; // amar create kora cricketer function k access korar jonno
// const Sakib = new Cricketer("Sakib", 40, "allrounder", "bangladesh");
// Sakib.eat();
// console.log(Sakib.name);
// console.log(Sakib.age);
// console.log(Sakib.type);
// console.log(Sakib.country);

// akhon amara e]upore function ta class er madhome likhte pari
// js class asar por amra age prototype diye je kaj koratam thik oi kaj e hoi but syntax e aktu vinno
{
  class Person {
    //parent class
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  class Cricketer extends Person {
    //sub class
    constructor(name, age, type, country) {
      super(name, age);
      this.name = name;
      this.age = age;
      this.type = type;
      this.country = country;
    }
    eat() {
      console.log(`${this.name} is eating`);
    }
    paly() {
      console.log(`${this.name} is palying`);
    }
  }
  const Sakib = new Cricketer("Sakib", 40, "allrounder", "bangladesh");
  //   Sakib.eat();
  //   Sakib.paly();
  //   console.log(Sakib.name);
}

{
  // class get and set methods
  class Person {
    //parent class
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get sayHELLO() {
      // getter methods
      return this.name;
    }
    set setName(name) {
      //setter
      return (this.name = name);
    }
    static isEqualAge() {
      // static methods
      console.log("it's static methods");
    }
  }

  const sulaiman = new Person("sulaiman", 30);
  console.log(sulaiman.sayHELLO);
  sulaiman.setName = "nasim";
  console.log(sulaiman.name);
  Person.isEqualAge();
}


