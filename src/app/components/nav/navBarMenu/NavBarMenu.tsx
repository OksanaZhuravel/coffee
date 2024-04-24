'use client'
import styles from '@/components/nav/navBarMenu/navBarMenu.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuLinks = [
	{
		id: 1,
		link: '/menu/coffee',
		text: 'Coffee',
		src: '/image/icon/coffee.png',
	},
	{ id: 2, link: '/menu/tea', text: 'Tea', src: '/image/icon/tea.png' },
	{
		id: 3,
		link: '/menu/dessert',
		text: 'Dessert',
		src: '/image/icon/dessert.png',
	},
]
export default function NavBarMenu() {
	const path = usePathname()
	return (
		<ul className={styles.list}>
			{menuLinks.map((menu) => (
				<li key={menu.id}>
					<Link
						href={menu.link}
						className={clsx(styles.button, {
							[styles.active]: path === menu.link,
						})}
					>
						<span className={styles.box}>
							<Image src={menu.src} alt={menu.text} width={16} height={16} />
						</span>
						<span className='text-link'>{menu.text}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}
