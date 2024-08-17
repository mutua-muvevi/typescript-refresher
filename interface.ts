interface IUser {
	usename: string;
	email: string;
	age: number;
}

const user : IUser = {
	usename: "John",
	email: "j@j.com",
	age: 30
}

interface IEmployee extends IUser {
	profession : string
}

const employee : IEmployee = {
	usename: "John",
	email: "j@j.com",
	age: 30,
	profession: "Developer"
}