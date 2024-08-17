// String
let myName: string = "John";
myName = "James";

// Number
let myAge: number = 30;
myAge = 31;

// Boolean
let hasHobbies: boolean = false;
hasHobbies = true;

// assign types
let myRealAge: number;
myRealAge = 29;

// union types
let myPassword: string | number = "Pass123456";
myPassword = 123456;

// array
// array of strings
let hobbies: string[] = ["Travel", "Sports"];
hobbies.push("biking");

//array of numbers
let myGrades: number[] = [100, 90, 80];
myGrades.push(95);

//array of booleans
let myBooleans: boolean[] = [true, true, false];
myBooleans.push(true);

//array of both strings and numbers
let myMixed: (string | number)[] = ["Hello", 123, 59, "true"];
myMixed.map((x) => (typeof x === "string" ? x.toUpperCase() : x + x / 2));

// tuple
let myTuple: [string, number, boolean] = ["Hello", 123, true];
myTuple.push("Hello");

// object
let myObject: {
	name: string;
	age: number;
	isAdmin: boolean;
	phone?: string; //this will ensure that phone is optional
};

myObject = {
	name: "John",
	age: 30,
	isAdmin: true,
	phone: "123-456-7890",
};

// any
let myAny: any = "Hello"; // this shouldn't be used regularly
myAny = 123;

