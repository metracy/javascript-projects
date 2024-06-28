
// repeats # with input parameter of number of times to repeat it.
function makeLine(number, parameter = '#'){  
    let string_repeat = parameter.repeat(number)
    return string_repeat
}

console.log(makeLine(5))

console.log('------------ Separator block ------------');
// test with array filling each time and joining a new line character

function makeSquare(size, parameter = '#') {
    return Array(size).fill(makeLine(size,parameter)).join("\n");
}

console.log(makeSquare(5));

console.log('------------ Separator block ------------');


// add additional parameter
function makeRectangle(width, height, parameter  = '#'){
    return Array(height).fill(makeLine(width)).join("\n");
}

console.log(makeRectangle(5, 3));

console.log('------------ Separator block ------------');


function makeDownwardStairs(height, parameter = '#') {
    let stairs = "";
    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i, parameter) + "\n";
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5,'*'));


console.log('------------ Separator block ------------');


function makeSpaceLine(spaces, length, parameter = '#'){
    return " ".repeat(spaces) + parameter.repeat(length) + " ".repeat(spaces)
}


console.log(makeSpaceLine(3, 5,"*"));



console.log('------------ Separator block ------------');



function makeIsoscelesTriangle(height, parameter = '#') {
    let tri = '';

    // iterate over i from 0 to < height and call makeSpaceLine
    for (let i = 0; i < height; i++) {
      tri += (makeSpaceLine(height - i - 1, 2*i + 1, parameter) + '\n');
    }
    // remove last row of '\n'
    return tri.slice(0, -1);
  }

console.log(makeIsoscelesTriangle(5,"*"));


console.log('------------ Separator block ------------');


function makeDiamond(height, parameter = '#') {
    let top = makeIsoscelesTriangle(height, parameter);
    // slice off the bottom row of top after split reverse
    let bottom = top.split('\n').slice(0,-1).reverse().join('\n')
    // return the combined with newline added to make it show below it as if it were mirrored
    return top + "\n" + bottom;
}

console.log(makeDiamond(5,"*"));

