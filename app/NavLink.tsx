'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const segment = useSelectedLayoutSegments();

	const active = `/${segment[0] || ''}` === href;

	return (
		<Link className={active ? 'underline' : ''} href={href}>
			{children}
		</Link>
	);
}
