import Link from 'next/link';

export type Game = {
	id: string;
	name: string;
	avgRating: number;
	description: string;
};

async function getGames() {
	let res = await fetch('http://localhost:3000/api/games');
	return res.json();
}

export default async function Page({
	children,
}: {
	children: React.ReactNode;
}) {
	const games = await getGames();

	return (
		<div className="flex">
			<ul className="p-4 space-y-4">
				{games.map((game: Game) => (
					<li key={game.id}>
						<Link href={`/games/${game.id}`}>{game.name}</Link>
					</li>
				))}
			</ul>
			<div className="p-4">{children}</div>
		</div>
	);
}
