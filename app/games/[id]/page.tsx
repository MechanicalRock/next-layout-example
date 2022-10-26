import { NextPage } from 'next';
import { Game } from '../layout';

async function getGame(id: string) {
	let res = await fetch(`http://localhost:3000/api/games/${id}`);
	return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
	const game: Game = await getGame(params.id);

	return (
		<div className="space-y-4">
			<h1 className="text-lg font-bold">{game.name}</h1>
			<h3 className="font-light">Average Rating: {game.avgRating}</h3>
			<p>{game.description}</p>
		</div>
	);
}
