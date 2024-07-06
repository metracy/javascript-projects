// First, create an anonymous function and practice how to use the map method.

let thelist = ['Elocution', 21, 'Clean teeth', 100]
let AnonFunc = function(args){
    if (typeof args === "number") {
        return  args * 3;
    }
    if (typeof args === "string") {
        return "ARRR!"
    }
    else {
        return args
    }
}

let result = thelist.map(AnonFunc);

console.log(thelist)
console.log(result)

/*
You need to hack into the shuttle code and steal supplies. 
Since the LaunchCode TAs keep a sharp eye on the shuttle goodies, you can’t just add new functions like siphonFuel or lootCargo. 
You need to be more sneaky.

*/


function checkFuel(level) {
    if (level > 100000){
       return 'green';
    } else if (level > 50000){
       return 'yellow';
    } else {
       return 'red';
    }

 }
 
 function holdStatus(arr){
    if (arr.length < 7) {
       return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
       return `Over capacity by ${arr.length - 7} items.`
    } else {
       return "Full";
    }

 }
 
 let fuelLevel = 200000;
 let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
 
 let FuelLeft = function(a) {
   if (checkFuel(a) === 'green') {
      return a - 100001;
   } else if (checkFuel(a) === 'yellow') {
       return a - 50001; 
   } else {
       return a; 
   }
}

let cargo_hold = function(arr) {
   let i = 0;
   let bounty = [];
   while (i < arr.length) {
      if (arr[i] === 'satellite') {
         bounty.push(arr[i]);
         cargoHold[i] = 'clay satellite';
      }
      else if (arr[i] === 'gold') {
         bounty.push(arr[i]);
         cargoHold[i] = 'Mannheim gold';
      }
      else {

      }
      i++
   }
   return bounty;
};


let irs = function(levelOfFuel, itemsInCargo) {
   let arr = cargo_hold(itemsInCargo);
   return `Raided ${FuelLeft(levelOfFuel)} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
}

let note = irs(fuelLevel, cargoHold);

 console.log("Fuel level: "+ checkFuel(fuelLevel));
 console.log("Hold status: "+ holdStatus(cargoHold));

console.log(note)