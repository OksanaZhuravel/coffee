import type { Metadata } from 'next'
import Link from 'next/link'
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
			<div className={styles.container}>
				<h1 className={`${styles.title} title`}>
					Behind each of our cups hides an
					<span className={`${styles.accent} accent`}>
						&nbsp;amazing surprise
					</span>
				</h1>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link className={styles.button} href={'/menu/coffee'}>
							<span className='text-link'>coffee</span>
						</Link>
					</li>
					<li>
						<Link className={styles.button} href={'/menu/tea'}>
							<span className='text-link'>tea</span>
						</Link>
					</li>
					<li>
						<Link className={styles.button} href={'/menu/dessert'}>
							<span className='text-link'>Dessert</span>
						</Link>
					</li>
				</ul>
			</div>
			{children}
		</section>
	)
}
