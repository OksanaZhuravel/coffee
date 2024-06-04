'use client'
import Modal from '@/components/UI/Modal/Modal'
import CardItem from '@/components/card/CardItem'
import styles from '@/components/card/card.module.scss'
import { inter, interRegular } from '@/fonts'
import { CardProps, ItemProps } from '@/interface/interface'
import { formatter } from '@/utils/formatter'
import Image from 'next/image'
import { useState } from 'react'

export default function CardList({ items }: CardProps) {
	const [isModalOpen, setModalOpen] = useState(false)
	const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null)
	const handleOpenModal = (item: ItemProps) => {
		setSelectedItem(item)
		setModalOpen(true)
		// console.log('handleOpenModal')
	}

	const handleCloseModal = () => {
		setModalOpen(false)
			setSelectedItem(null)
		// console.log('handleCloseModal')
	}

	return (
		<>
			{items.map((el) => (
				<article
					className={styles.card}
					onClick={() => handleOpenModal(el)}
					key={el.id}
				>
					<Image
						className={styles.img}
						alt={el.title}
						src={el.src}
						width={310}
						height={310}
					/>
					<div className={`${inter.className} ${styles.body}`}>
						<div className={styles.box}>
							<h3 className='subtitle'>{el.title}</h3>
							<p className={`${interRegular.className} ${styles.text} text `}>
								{el.text}
							</p>
						</div>
						<p className={`${styles.prise} subtitle`}>
							{formatter.format(el.price)}
						</p>
					</div>
				</article>
			))}

			<Modal open={isModalOpen} onCancel={handleCloseModal}>
				{selectedItem && <CardItem item={selectedItem} />}
			</Modal>
		</>
	)
}
