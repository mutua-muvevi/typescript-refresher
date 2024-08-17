// functions

// function that returns a number
let letReverseNumber = (number: number | string): number => {
	let stringNumber: string = number.toString();

	stringNumber.split("").reverse().join("");

	return parseInt(stringNumber);
};

letReverseNumber(12345);

// function that returns nothing
let sayHello = (name: string): void => {
	console.log(`Hello, ${name}!`);
};

sayHello("John")

let sum = (num1 : number, num2: number, anotherNum?: number) : number => {
	return num1 + num2
}
sum(1, 2)