interface IPost<T> {
	id: number;
	title: string;
	description: string;
	extra: T[];
}

const posts: IPost<string> = {
	id: 1,
	title: "Hello",
	description: "World",
	extra: ["extra"],
};

interface Ipost2<T extends object> {
	id: number;
	title: string;
	description: string;
	extra: T[];
}

const posts2: Ipost2<{ image: string; tags: string[] }> = {
	id: 1,
	title: "Hello",
	description: "World",
	extra: [
		{
			image: "image",
			tags: ["tag"],
		},
	],
};


interface Author {
	name: string;
	niche: string;
}

interface IPost3 <T extends object, A> {
	id: number;
	title: string;
	description: string;
	extra: T[];
	author: A;
}

const posts3 : IPost3<{image: string, tags : string[]}, Author> = {
	id: 1,
	title: "Hello",
	description: "World",
	extra: [
		{
			image: "image",
			tags: ["tag"],
		},
	],
	author: {
		name: "John",
		niche: "Developer",
	},
}