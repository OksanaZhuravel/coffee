import { interRegular } from '@/fonts'
import Image from 'next/image'
import Link from 'next/link'
import styles from './promo.module.scss'

export default function Promo() {
	return (
		<section className={styles.promo}>
			<div className={styles.container}>
				<div className={`${styles.fon} container`}>
					<Image
						className={styles.img}
						alt='Image fon'
						src='/image/global/img-hero.jpg'
						width={1360}
						height={644}
						priority
					/>
				</div>
				<div className={styles.body}>
					<h1 className={`${styles.heading} heading`}>
						<span className={`${styles.accent} accent`}>Enjoy</span> premium
						coffee at our charming cafe
					</h1>
					<p className={`${interRegular.className} ${styles.text} text`}>
						With its inviting atmosphere and delicious coffee options, the
						Coffee House Resource is a popular destination for coffee lovers and
						those seeking a warm and inviting space to enjoy their favorite
						beverage.
					</p>
					<Link className={styles.button} href={'/menu'}>
						<span className='text-link'>Menu</span>
						<Image
							className={styles.svg}
							src='/image/coffee-cup.svg'
							alt='icon'
							width={20}
							height={20}
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}
