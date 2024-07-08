let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 5,
   move: function () {
      return Math.floor(Math.random() * 11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 4,
   move: function () {
      return Math.floor(Math.random() * 11);
   }
};

let brad = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.floor(Math.random() * 11);
   }
};

let leroy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.floor(Math.random() * 11);
   }
};

let almina = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 3,
   move: function () {
      return Math.floor(Math.random() * 11);
   }
};
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, brad, leroy, almina];

// Print out the relevant information about each animal.
function crewReports(crew) {
   for (let animal in crew){
      let member = crew[animal];
      console.log(`${member.name} is a ${member.species}. They are ${member.age} years old and ${member.mass} kilograms. Their ID is ${member.astronautID}.`);
   }
};

crewReports(crew);

function fitnessTest(crew) {
   for (let animal in crew){
      let turns = 0
      let steps = 0
      while (steps <= 20) {
         steps += crew[animal].move()
         turns += 1
      }
      console.log(`${crew[animal].name} took ${turns} turns to take 20 steps.`);
   }
};
// Start an animal race!
fitnessTest(crew)