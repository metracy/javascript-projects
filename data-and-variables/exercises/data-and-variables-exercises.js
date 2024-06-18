// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)
// Calculate a space mission below
let distanceToMarsMiles = distanceToMarsKm * milesPerKm
let hoursToMars = distanceToMarsMiles / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let distanceToMoonMiles = distanceToMoonKm * milesPerKm;
let hoursToMoon = distanceToMoonMiles / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
4 == "4"
