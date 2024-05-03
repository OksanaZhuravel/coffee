import { contactList } from '@/api/data'
import styles from '@/components/footer/footer.module.scss'
import Image from 'next/image'

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
