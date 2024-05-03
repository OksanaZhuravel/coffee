'use client'
import { menuLinkMenu } from '@/api/data'
import styles from '@/components/nav/navBarMenu/navBarMenu.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBarMenu() {
	const path = usePathname()
	return (
		<ul className={styles.list}>
			{menuLinkMenu.map((menu) => (
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
