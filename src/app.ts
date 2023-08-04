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
