let tortoiseOne = {
    age: 150,
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"],
 };

 let tortoiseTwo = {
    age: 150,
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"],
 };
 console.log(tortoiseOne)
 console.log(tortoiseTwo)
 console.log(tortoiseOne == tortoiseTwo);

 console.log(tortoiseOne.age === tortoiseTwo.age)

 console.log(Math.trunc(-3.87))
 console.log( Math.round(-3.87))

 let num = Math.floor(Math.random()*10);

 for (let i = 0; i < 40;i++) {
    let num = Math.floor(Math.random()*10);
    console.log(num);
    if (num == 0){
        break
    }
 }
 