import About from '@/components/home/about/About'
import Favorite from '@/components/home/favorite/Favorite'
import Mobile from '@/components/home/mobile/Mobile'
import Promo from '@/components/home/promo/Promo'
// export const getStaticProps: GetStaticProps = async () => {
// 	const feed = await prisma.post.findMany({
// 		where: { published: true },
// 		include: {
// 			author: {
// 				select: { name: true },
// 			},
// 		},
// 	})
// 	return {
// 		props: { feed },
// 		revalidate: 10,
// 	}
// }

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
