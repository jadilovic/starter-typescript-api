import { connect } from 'mongoose';

export default async function mongooseConnect(): Promise<void> {
	const mongoDbUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017';
	console.log(mongoDbUri);

	await connect(mongoDbUri);
}
