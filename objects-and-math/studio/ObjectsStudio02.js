// annoyed with rounding function not in this like python

let Matt = {
  round: (num, decimals = 2) => {
      let factor = 10 ** decimals;
      return (Math.round(num * factor) / factor);
  }
};


// Code your orbitCircumference function here:

let orbitCircumference = radius => Matt.round(2 * Math.PI * radius, 0);
  
// Code your missionDuration function here:

let missionDuration = (orbits_completed, orbital_radius = 2000, orbital_speed = 28000) => Matt.round((orbitCircumference(orbital_radius) * orbits_completed) / orbital_speed);
// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(`The mission will travel ${orbitCircumference(2000)*5} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)