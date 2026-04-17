{
  function Person(name, age) {
    let Person = {};
    Person.name = name;
    Person.age = age;
    Person.play = function () {
      console.log("person is playing");
    };
    Person.eat = function () {
      console.log("person is eating");
    };
    return Person;
  }
  // ei khane akta big problem holo amara jokhon new person create korchhi tokhon pesron er majhe thaka methods gulo abar notun vabe create hochchhe fole boro application onek boor problem create korbe and memory o besi lagbe tai amader ei methods gulo baire theke acces korte hobe
  const nasim = Person("nasim", 20);
  const nahid = Person("nasim", 20);
}

{
  const personMethods = {
    eat() {
      console.log("person is eating");
    },
    play() {
      console.log("person is playing");
    },
  };
  function Person(name, age) {
    let Person = {};
    Person.name = name;
    Person.age = age;
    Person.eat = personMethods.eat;
    Person.play = personMethods.play;
    return Person;
  }
  // ei khane akta problem slove hoichhe ta holo person er majhe je methods gulo ta r new person er jonno create hochchhe na ta ta person Methods theke share kora hochhe but ei khane arecta proble dekha jachchhe .amara jokhon personMethods er majhe kono methods add korchhi ta abar Person fuction er majhe add kora lagchhe  mane akoi kaj duble korte hoichhe.amar aei problem ta o slove korte pari Object.create methods diye
  const nasim = Person("nasim", 20);
  const nahid = Person("nasim", 20);
  //   console.log(nasim);
  //   console.log(nahid);
}

// Object.create methods ki vabe kaj kore

{
  const car = {
    name: "BMW",
    color: "Blue",
    qyantity: "200kg",
  };
  const car1 = Object.create(car);
  //   console.log(car1.name);

  // ei kahne dekhte parchhi amara Objec.create methods diye akta new object create korte pari but new object ta emty object thake but amara parent object er sob proparty access korte pari. ei kaj ta kore js prototype er mahome
  //akhon amara ei object,create ei madhome amra person function er problem ta slove korte parbo
}
{
  const personMethods = {
    eat() {
      console.log("person is eating");
    },
    play() {
      console.log("person is playing");
    },
  };
  function Person(name, age) {
    // amra person ta ager moto emty create na kore ei vabe create korle r dubble kore methods add korte hobe na person er majhe ja nai ta  jodi parent er majhe thake tobe person ta access korte parbe .ekhane personMethods hoto parent r person holo chiled
    let person = Object.create(personMethods);
    // jodio amader ager problem ta slove hoichhe but ei khane arekta problem dekha jachchhe. Person holo amader main function akhon Person er kaj korar jonno mader 3rd akta object er upor depend korte hochhe .amra ei problem ta o slove korte pari prototype er maddhome .amara jani prototype holo js function er akta bil-in proparty .tai amara chaile perosn er je je methods lagbe ta person er prototype er majhe diye dite pari tahole r 3rd kono object use kora lagbe na
    person.name = name;
    person.age = age;
    return person;
  }
  //   const nasim = Person("nasim", 20);
  //   nasim.play();
  //   const nahid = Person("nasim", 20);
  //   nahid.eat();
}
{
  function Person(name, age) {
    let person = Object.create(Person.prototype);
    // jodio amader ager problem ta slove hoichhe but ei khane arekta problem dekha jachchhe. Person holo amader main function akhon Person er kaj korar jonno mader 3rd akta object er upor depend korte hochhe .amra ei problem ta o slove korte pari prototype er maddhome .amara jani prototype holo js function er akta bil-in proparty .tai amara chaile perosn er je je methods lagbe ta person er prototype er majhe diye dite pari tahole r 3rd kono object use kora lagbe na
    person.name = name;
    person.age = age;
    return person;
  }
  Person.prototype = {
    eat() {
      console.log("person is eating");
    },
    play() {
      console.log("person is playing");
    },
  };
  //   const nasim = Person("nasim", 20);
  //   nasim.play();
  //   const nahid = Person("nasim", 20);
  //   nahid.eat();
}
// ei porjon to mar 3 ta bisoy shikhte parchhi
// 1 ki vabe constructor function ctreate korte hoi. constructor fun er name boro hater dite hoi
// 2 ki vabe function er prototype er majhe methods add korte hoi
// 3 object.create methods ki vabe kaj korte

// amara chaile ei code k aro improve korte pari amara function ta manulay call na kore new key word diye call korte pari ete amader constructor fuction er majhe r manualy object.create call kora lagbe na and return o kora lagbe na js atomaticaly amader call kore diye

{
  function Person(name, age) {
    // let person = Object.create(Person.prototype);
    this.name = name;
    this.age = age;
    // return person;
  }
  Person.prototype = {
    eat() {
      console.log("person is eating");
    },
    play() {
      console.log("person is playing");
    },
  };
  //   const nasim = new Person("nasim", 20);
  //   nasim.play();
  //   const nahid = new Person("nasim", 20);
  //   nahid.eat();
}
// amar lekha ei prototype base code amra class diye o likhte pari
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    eat() {
      console.log("person is eating");
    }
    play() {
      console.log("person is playing");
    }
  }
  const nasim = new Person("nasim", 20);
  nasim.play();
  const nahid = new Person("nasim", 20);
  nahid.eat();
}
