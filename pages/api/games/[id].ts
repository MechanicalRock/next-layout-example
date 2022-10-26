// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';

export type Game = {
	id: string;
	name: string;
	avgRating: number;
	description: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Game | object>
) {
	const { id } = req.query;

	const result = data.find((d) => d.id === id);

	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).send({});
	}
}
