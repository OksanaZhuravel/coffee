import styles from '@/components/header/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Logo({ setIsMenuOpen }: LogoProps) {
	return (
		<Link
			href={'/'}
			onClick={() => {
				setIsMenuOpen(false)
			}}
		>
			<Image
				className={styles.img}
				src='/image/logo.svg'
				alt='logo'
				width={100}
				height={60}
				priority
			/>
		</Link>
	)
}
