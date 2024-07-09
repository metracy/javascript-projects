// Code your selectRandomEntry function here:

  // non arrow version 
function selectRandomEntry (ids) {
  return ids[Math.floor(Math.random() * ids.length)];
}

// version using arrow implicit return
// let selectRandomEntry = (ids) => ids[Math.floor(Math.random() * ids.length)];




// Code your buildCrewArray function here:
function buildCrewArray(crew_ids, animal_array) {
  let selection = [];
  while (selection.length < 3) {
    let member = selectRandomEntry(crew_ids);
    if (selection.includes(member)){
      // jump  to next iteration
    }
    else {
      selection.push(member);
    }
  };
  for (let i = 0; i < selection.length; i++){
    selection[i] = (animal_array.find(mem => mem.astronautID == selection[i]).name); // mem is element in function and we're replacing selection[i] with name from array
  }
  return selection;
};

let idNumbers = [291, 414, 503, 599, 796, 890];

// test to build a crew

//below



  

// Here are the candidates and the 'animals' array:
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


let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];



crew = buildCrewArray(idNumbers, animals);


// Code your template literal and console.log statements:
console.log(`${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`)