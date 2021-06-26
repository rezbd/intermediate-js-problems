const numbers = [2, 3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
// 	let element = numbers[i];
// 	element *= element;
// 	output.push(element);
// }
const result = numbers.map((num) => num * num);
const bigger = numbers.filter((num) => num > 4);
/*
find is a version of filter. find works like a boolean. when find returns true
it gets out of the element.
*/
const findNum = numbers.find((n) => n > 3);

console.log(result);
console.log(bigger);
console.log(findNum);
