import { Express, Request, Response } from 'express';
import userRoutes from '../controllers/user.controller';

const routerSetup = (app: Express) =>
	app
		.get('/', async (req: Request, res: Response) =>
			res.send('Hello, Express Server is Here!')
		)
		.use('/users', userRoutes);

export default routerSetup;
