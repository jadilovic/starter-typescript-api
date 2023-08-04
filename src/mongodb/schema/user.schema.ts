import { Schema, model } from 'mongoose';
import { IUser } from '../model/user.model';

const userSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

export default model<IUser>('user', userSchema);
