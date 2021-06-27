let bonus = 20; //global scope

function sum(n1, n2) {
	let result = n1 + n2 + bonus;
	console.log(bonus);
	if (result > 10) {
		const mood = "happy"; //block scope
		console.log(mood);
		var city = "Sylhet";
	}
	const mood = "sad"; //can declare it because this mood is outside of above block scope
	console.log(mood);
	console.log(city); //hoisting. can access from outside of block scope. So basically hoisting is, something declared can be brought up.
	console.log(day); //undefined!! So only declaration part is hoisted, not the value part
	var day = "Sunday";
	return result;
}
city = "Dhaka"; //if var is a global scope, why can't it be changed from outside the function? Ok, now I know it is a function scope.
console.log(city);
const output = sum(7, 3);
console.log(output);

//This needs further exploration. Meanwhile checking an article from https://www.thatjsdude.com/jsConcepts/concepts/scope.html
