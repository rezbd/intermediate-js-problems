const users = [
	{ id: 11, name: "John" },
	{ id: 21, name: "Tom" },
	{ id: 31, name: "Kyle" },
	{ id: 41, name: "Russell" },
];

const userNames = [];
for (let i = 0; i < users.length; i++) {
	const element = users[i];
	const elementNames = element.name;
	userNames.push(elementNames);
}
console.log(userNames);

//successfully pushed the names to an empty array without watching any tutorial.

const useMap = users.map((x) => x.name);
console.log(useMap);

const userId = users.map((x) => x.id);
console.log(userId);

const useFilter = users.filter((x) => x.id > 30);
console.log(useFilter);

const useFind = users.find((x) => x.id > 30);
console.log(useFind);
