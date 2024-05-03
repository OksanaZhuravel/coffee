import type { Metadata } from 'next'

import Subtitle from '@/components/subtitle/Subtitle'

export const metadata: Metadata = {
	title: 'Coffee House | Menu',
	description: 'Enjoy premium coffee at our charming cafe',
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section>
			<Subtitle />
			{children}
		</section>
	)
}
