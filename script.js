// Generating A Random Letter From The Name Inputed By The User

const myName = prompt('Enter Your Name');

let randomLetter = myName.charAt(Math.floor(Math.random() * myName.length));

console.log(
	'The random letter is ',
	randomLetter,
	'at index of ',
	myName.indexOf(randomLetter)
);
