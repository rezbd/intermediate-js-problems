//undefined 1
let bird;
console.log(`the 1st undefined output is ${bird}`);

//undefined 2 (no function return)
function add(num1, num2) {
	console.log(num1 + num2);
}
const output = add(5, 7);
console.log(`the 2nd undefined output is ${output}`);

//undefine 3 -- there is a return, but what is it returning?
function add2(num1, num2) {
	console.log(num1 + num2);
	return;
}
const output2 = add2(12, 13);
console.log(`the 3rd undefined output is: ${output2}`);

//undefine 4
function add3(num1, num2) {
	console.log(num1, num2);
	// return num1 + num2;
}
const output3 = add3(25);
console.log(`the 4th undefined output is: ${output3}`);

//undefine 5
const aGuy = { id: 13, name: "funny dude" };
console.log(`this is the 5th undefined example: ${aGuy.location}`);

//undefined 6
let politics = undefined;
console.log(`the 6th undefined output: ${politics}`);

//undefined 7
let animals = ["lion", "deer", "wolf"];
console.log(`6th undefined output: ${animals[3]}`);

/**
 * null is explicitly set
 */
