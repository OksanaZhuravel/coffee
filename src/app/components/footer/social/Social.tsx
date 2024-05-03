import { socialLinks } from '@/api/data'
import styles from '@/components/footer/footer.module.scss'
import Link from 'next/link'

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
