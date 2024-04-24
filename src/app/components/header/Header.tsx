'use client'

import styles from '@/components/header/header.module.scss'
import Logo from '@/components/header/Logo/Logo'
import NavBar from '@/components/nav/navBarAll/NavBar'
import NavBarHome from '@/components/nav/navBarHome/NavBarHome'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const path = usePathname()
	const isMainMenu = path === '/'
	return (
		<header className={`${styles.header}`}>
			<div className={`${styles.container} ${isMenuOpen ? styles.open : ''}`}>
				<div className={styles.inner}>
					<Logo setIsMenuOpen={setIsMenuOpen} />
					<button
						className={styles.button}
						onClick={() => setIsMenuOpen((prevState) => !prevState)}
					>
						<Image
							className={styles.btn}
							src={
								isMenuOpen
									? '/image/icon/button-burger-active.svg'
									: '/image/icon/button-burger.svg'
							}
							alt=''
							width={44}
							height={44}
						/>
					</button>
				</div>
				{isMainMenu ? (
					<NavBarHome setIsMenuOpen={setIsMenuOpen} />
				) : (
					<NavBar setIsMenuOpen={setIsMenuOpen} />
				)}
			</div>
		</header>
	)
}
