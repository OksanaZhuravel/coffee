'use client'
import { menuLinks } from '@/api/data'
import styles from '@/components/header/header.module.scss'
import { NavBarProps } from '@/interface/interface'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function NavBarHome({ setIsMenuOpen }: NavBarProps) {
	const path = usePathname()
	const [activeLink, setActiveLink] = useState('')
	const handleClickMenu = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		link: string
	) => {
		e.preventDefault()
		const targetId = link.split('#')[1]
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' })
			setActiveLink(link)
			setIsMenuOpen(false)
		}
	}

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
								[styles.active]: activeLink === menu.link,
								// [styles.active]: router === menu.link,
							})}
							onClick={(e) => handleClickMenu(e, menu.link)}
						>
							<span className='text-burger'>{menu.text}</span>
						</Link>
					</li>
				))}
			</ul>
			<Link
				href={'/menu/coffee'}
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
