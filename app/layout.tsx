import 'tailwindcss/tailwind.css';
import NavLink from './NavLink';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Next Layout Example</title>
			</head>
			<body>
				<header className="border-b p-4">
					<nav className="space-x-4">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/games">Games</NavLink>
					</nav>
				</header>
				<div className="p-4">{children}</div>
			</body>
		</html>
	);
}
