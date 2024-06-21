let number = 123.45;
if (number.toString().includes('.')) {
    console.log(number.toString().length - 1);
} else {
    console.log(number.toString().length);
}

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim().toUpperCase();
console.log(dna);

dna = dna.replace('GCT', 'AGG');
console.log(dna);
console.log(dna.slice(16, 19));
console.log(`${dna.slice(4, 7).toLowerCase()} ${dna.slice(dna.indexOf('CAT'), dna.indexOf('CAT') + 3).toLowerCase()}`);

let language = 'JavaScript';
console.log(language.slice(0, 1) + language.slice(4, 5));

let practiceFile = [273.15];
practiceFile.push(42);
console.log(practiceFile);

practiceFile.push(false, -4.6, "87");
console.log(practiceFile);

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = 'space tether';
console.log(cargoHold);
console.log(cargoHold.shift());
console.log(cargoHold);
console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);
