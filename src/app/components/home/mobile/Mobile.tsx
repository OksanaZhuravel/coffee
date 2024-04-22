import { interRegular } from '@/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FaApple, FaGooglePlay } from 'react-icons/fa6'
import styles from './mobile.module.scss'

export default function Mobile() {
	return (
		<section className={styles.mobile} id='mobile'>
			<div className={styles.container}>
				<div className={styles.body}>
					<h2 className={`${styles.title} title`}>
						<span className={`${styles.accent} accent`}>Download&nbsp;</span>
						Apps To Facilitate Ordering
					</h2>
					<p className={`${interRegular.className} ${styles.text} text `}>
						Download the Resource app today and experience the comfort of
						ordering your favorite coffee from wherever you are
					</p>
					<div className={styles.buttons}>
						<Link
							className={styles.button}
							href={'https://www.apple.com/app-store/'}
						>
							<FaApple />
							<span className='text-small'>Download on the</span>
							<span className='text-link'>App Store</span>
						</Link>
						<Link
							className={styles.button}
							href={'https://play.google.com/store/apps'}
						>
							<FaGooglePlay />
							<span className='text-small'>Get it on</span>
							<span className='text-link'>Google Play</span>
						</Link>
					</div>
				</div>
				<Image
					className={styles.img}
					src='/image/global/mobile.png'
					alt='mobile'
					width={630}
					height={630}
				/>
			</div>
		</section>
	)
}
