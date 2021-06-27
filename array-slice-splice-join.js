const animalsAndBirds = ["tiger", "deer", "lion", "sparrow", "tailorbird", "robin", "ants", "grasshopper"];
const birds = animalsAndBirds.slice(3, 6); // (startIndex, endIndex+1)
console.log(birds);
// console.log(animalsAndBirds);
const removeInsects = animalsAndBirds.splice(6, 2, "parrot", "myna", "starling"); // (indexNumber, numberOfItems, addItems1, add2, add3)

const together = animalsAndBirds.join(", and "); //white space or comma or etc
console.log(removeInsects);
console.log(animalsAndBirds);
console.log(together);
