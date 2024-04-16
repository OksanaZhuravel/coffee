'use client'
import styles from '@/components/header/header.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const menuLinks = [
	{ id: 1, link: '/favorite', text: 'Favorite coffee' },
	{ id: 2, link: '/about', text: 'About' },
	{ id: 3, link: '/mobile', text: 'Mobile app' },
	{ id: 4, link: '/contact', text: 'Contacts' },
]
interface NavBarProps {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function NavBar({ setIsMenuOpen }: NavBarProps) {
	const router = usePathname()

	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				{menuLinks.map((menu) => (
					<li
						key={menu.id}
						onClick={() => {
							setIsMenuOpen(false)
						}}
					>
						<Link
							href={menu.link}
							className={clsx(styles.link, {
								[styles.active]: router === menu.link,
							})}
						>
							<span className='text-burger'>{menu.text}</span>
						</Link>
					</li>
				))}
			</ul>
			<Link
				href={'/menu'}
				className={clsx(styles.btn, {
					[styles.active]: router === '/menu',
				})}
			>
				<div className={styles.wrap}>
					<span className='text-burger'>Menu</span>
					<Image
						className={styles.svg}
						src='/image/coffee-cup.svg'
						alt='icon'
						width={20}
						height={20}
					/>
				</div>
			</Link>
		</nav>
	)
}
