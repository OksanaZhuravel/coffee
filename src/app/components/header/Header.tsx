'use client'
import Logo from '@/components/header/Logo/Logo'
import NavBar from '@/components/header/NavBar/NavBar'
import styles from '@/components/header/header.module.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className={`${styles.header} text`}>
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
				<NavBar setIsMenuOpen={setIsMenuOpen} />
			</div>
		</header>
	)
}
