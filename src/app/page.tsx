import About from '@/components/home/about/About'
import Favorite from '@/components/home/favorite/Favorite'
import Promo from '@/components/home/promo/Promo'
import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<Promo />
			<Favorite />
			<About />
		</main>
	)
}
