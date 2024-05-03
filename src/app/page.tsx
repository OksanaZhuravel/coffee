import About from '@/components/home/about/About'
import Favorite from '@/components/home/favorite/Favorite'
import Mobile from '@/components/home/mobile/Mobile'
import Promo from '@/components/home/promo/Promo'
export default function Home() {
	return (
		<>
			<Promo />
			<Favorite />
			<About />
			<Mobile />
		</>
	)
}
