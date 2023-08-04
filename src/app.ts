import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import appSetup from './startup/init';
import routerSetup from './startup/router';
import securitySetup from './startup/security';

appSetup(app);
securitySetup(app, express);
routerSetup(app);

console.log('bob');

const getDuplicates = (str: string): { [key: string]: number } => {
	const obj: { [key: string]: number } = {};
	str.split('').forEach((char) => {
		if (obj[char]) {
			obj[char]++;
		} else {
			obj[char] = 1;
		}
	});
	return obj;
};

const text = 'adsjfdsfsfjsdjfhacabcsbajda';

console.log(getDuplicates(text));

const oneObj: { name: string } = { name: 'hello' };

console.log(oneObj);

const names: readonly string[] = ['bob'];

interface Person {
	name: string;
	age: number;
}

class me implements Person {
	name = 'aki';
	age = 44;
}

function myObj(obj: me) {
	return 'test ' + obj.name + ' ' + obj.age;
}

console.log(myObj({ name: 'wou', age: 22 }));

type Location = {
	name: string;
	address: {
		city: string;
		post: number;
	};
};

function getLocation(obj: Location) {
	return `${obj.name} lives at ${obj.address.city} with post number ${obj.address.post}`;
}

console.log(
	getLocation({ name: 'mark', address: { city: 'Bosanski Novi', post: 9999 } })
);

enum Category {
	Sport = 'S',
	Movie = 'M',
	Animal = 'A',
	Car = 'C',
}

function getCategory(cat: Category, cat1: Category) {
	return cat + cat1;
}

console.log(getCategory(Category.Animal, Category.Car));

const myValue: any = 'Testing';
const myLength: number = (myValue as string).length;
console.log(myLength);

interface inter1 {
	name: string;
}

interface inter2 {
	age: number;
}

type ty1 = inter1 & inter2;
type ty2 = inter1 | inter2;

function getTypes(value: ty1 | ty2) {
	return value;
}

console.log(getTypes({ name: 'aki', age: 11 }));

function usingGenerics<T>(value: T): T[] {
	return [value];
}

console.log(usingGenerics<string>('boby'));
console.log(usingGenerics<number>(33));

interface inter3 {
	doIt(): void;
}

class DoBig implements inter3 {
	doIt(): void {
		console.log('I am doing it');
	}
}

const doMe: inter3 = new DoBig();
doMe.doIt();
