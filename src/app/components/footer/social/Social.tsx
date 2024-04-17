import FacebookIcon from '@/components/footer/social/icon/facebook'
import InstagramIcon from '@/components/footer/social/icon/instagram'
import TwitterIcon from '@/components/footer/social/icon/twitter'
import Link from 'next/link'
import styles from '../footer.module.scss'

const socialLinks = [
	{
		id: 1,
		link: 'https://twitter.com/',
		text: 'twitter',
		icon: TwitterIcon,
	},
	{
		id: 2,
		link: 'https://instagram.com/',
		text: 'instagram',
		icon: InstagramIcon,
	},
	{
		id: 3,
		link: 'https://facebook.com/',
		text: 'facebook',
		icon: FacebookIcon,
		img: '/image/facebook.svg',
	},
]
export default function Social() {
	return (
		<ul className={styles.list}>
			{socialLinks.map((social) => (
				<li key={social.id}>
					<Link href={social.link} className={styles.link} target='_blank'>
						<social.icon width={24} height={24} />
					</Link>
				</li>
			))}
		</ul>
	)
}
