import type { Metadata } from 'next'

import Subtitle from '@/components/subtitle/Subtitle'
import styles from './layout.module.scss'

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
		<section className={styles.menuPage}>
			<Subtitle />
			{children}
		</section>
	)
}
