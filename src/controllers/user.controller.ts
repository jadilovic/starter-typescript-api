import { Router, Request, Response } from 'express';
import axios from 'axios';
import { IUser } from '../mongodb/model/user.model';
import UserModel from '../mongodb/schema/user.schema';

const controller = Router();

controller
	.post('/', async (req: Request, res: Response) => {
		console.log(req.body);

		const { username, email, password } = req.body;
		try {
			const newUser = await new UserModel({
				username,
				email,
				password,
			}).save();
			res.status(201).json(newUser);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Failed to create new user' });
		}
	})
	.get('/', async (req: Request, res: Response) => {
		console.log('TEST');

		try {
			// const users = await UserModel.find({});
			const apiUrl = 'https://gorest.co.in/public/v2/users';
			const response = await axios.get(apiUrl, {
				headers: {
					Authorization:
						'58f253318e7bf1e57a6c82cae6ce5968acc7247e2777273e2e1c81bb40520d14',
				},
			});
			const users = response.data;
			console.log(users.length);

			res.status(200).json(users);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Failed to get users' });
		}
	})
	.get('/:id', async (req: Request, res: Response) => {
		const { id } = req.params;
		console.log(id, req.params);

		if (!id) {
			return res.status(401).json({ message: 'Missing user ID in params' });
		}
		try {
			const existingUser = await UserModel.findById(id);
			if (existingUser) {
				res.status(200).json(existingUser);
			} else {
				res.status(400).json({ message: 'No user found with ID: ' + id });
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'Failed to get user from database' });
		}
	})
	.patch('/:id', async (req: Request, res: Response) => {
		const { id } = req.params;
		console.log(id, req.params);

		if (!id) {
			return res.status(401).json({ message: 'Missing user ID in params' });
		}
		try {
			const existingUser = await UserModel.findById(id);
			if (existingUser) {
				const changes: Partial<IUser> = req.body;
				console.log(changes);

				const updatedUser = await UserModel.findOneAndUpdate(
					{ _id: id },
					changes,
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} else {
				res.status(400).json({ message: 'No user found with ID: ' + id });
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'Failed to get user from database' });
		}
	})
	.delete('/:id', async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) {
			return res
				.status(400)
				.json({ message: 'Request must include id params' });
		}
		try {
			const user = await UserModel.findOne({ _id: id });
			await UserModel.deleteOne({ _id: id });
			res.status(203).json({ message: 'User with id ' + id + ' was deleted' });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Failed to delete user' });
		}
	});

export default controller;
