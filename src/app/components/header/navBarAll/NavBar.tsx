'use client'
import { NavBarProps } from '@/components/interface/interface'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './../header.module.scss'

export default function NavBar({ setIsMenuOpen }: NavBarProps) {
	const path = usePathname()

	return (
		<nav className={`${styles.navbar}`}>
			<Link
				href={'/menu/coffee'}
				onClick={() => {
					setIsMenuOpen(false)
				}}
				className={clsx(styles.btn, {
					[styles.active]: path === '/menu/coffee',
				})}
			>
				<span className='text-burger'>Menu</span>
				<Image
					className={styles.svg}
					src='/image/coffee-cup.svg'
					alt='icon'
					width={20}
					height={20}
				/>
			</Link>
		</nav>
	)
}
