import { Express } from 'express';
import mongooseConnect from '../mongodb/mongodb';

const appSetup = async (app: Express) => {
	try {
		await mongooseConnect();
		const APP_PORT = Number(process.env.APP_PORT) || 5000;

		app.listen(APP_PORT, () => {
			console.log('Server is listening at port:: ' + APP_PORT);
		});
	} catch (error) {
		console.log('Failed to connect to database');

		console.log(error);
	}
};

export default appSetup;
