import Image from 'next/image'
import styles from '@/components/footer/footer.module.scss'

const contactList = [
	{
		id: 1,
		text: '8558 Green Rd.,  LA',
		img: '/image/icon/pin-alt.svg',
	},
	{
		id: 2,
		text: '+1 (603) 555-0123',
		img: '/image/icon/phone.svg',
	},
	{
		id: 3,
		text: 'Mon-Sat: 9:00 AM – 23:00 PM',
		img: '/image/icon/clock.svg',
	},
]
export default function Contact() {
	return (
		<>
			<h3 id='contacts' className={`${styles.subtitle} subtitle`}>
				Contacts
			</h3>
			<ul className={styles.lists}>
				{contactList.map((contact) => (
					<li key={contact.id} className={styles.item}>
						<div className={styles.inner}>
							<Image
								alt={contact.text}
								src={contact.img}
								width={20}
								height={20}
							/>
							<span>{contact.text}</span>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}
