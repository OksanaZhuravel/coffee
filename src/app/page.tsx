import About from '@/components/home/about/About'
import Promo from '@/components/home/promo/Promo'
import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<Promo />
			<About />
		</main>
	)
}
