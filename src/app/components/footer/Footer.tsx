import Contact from '@/components/footer/contact/Contact'
import styles from '@/components/footer/footer.module.scss'
import Social from '@/components/footer/social/Social'

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.wrap}>
				<div className={styles.social}>
					<h2 className={`${styles.title} title`}>
						<span className={`${styles.accent} accent`}>Come visit us </span>
						&nbsp;just relax and &nbsp;enjoy cuppa coffee
					</h2>
					<Social />
				</div>
				<div className={styles.contact}>
					<Contact />
				</div>
			</div>
		</footer>
	)
}
