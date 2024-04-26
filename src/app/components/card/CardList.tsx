'use client'
import Modal from '@/components/UI/Modal/Modal'
import CardItem from '@/components/card/CardItem'
import styles from '@/components/card/card.module.scss'
import { inter, interRegular } from '@/fonts'
import Image from 'next/image'
import { useState } from 'react'
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

export default function CardList() {
	const [isModalOpen, setModalOpen] = useState(false)
	const handleOpenModal = () => {
		setModalOpen(true)
		console.log('handleOpenModal')
	}

	const handleCloseModal = () => {
		setModalOpen(false)
		console.log('handleCloseModal')
	}

	return (
		<>
			<article className={styles.card} onClick={handleOpenModal}>
				<Image
					className={styles.img}
					alt='coffee'
					src='/image/coffee/coffee-1.jpg'
					width={310}
					height={310}
				/>
				<div className={`${inter.className} ${styles.body}`}>
					<h3 className={`${styles.subtitle} subtitle`}>Irish coffee</h3>
					<p className={`${interRegular.className} ${styles.text} text `}>
						Fragrant black coffee with Jameson Irish whiskey and whipped milk
					</p>
					<p className='subtitle'>{formatter.format(7)}</p>
				</div>
			</article>
			<Modal open={isModalOpen} onCancel={handleCloseModal}>
				<CardItem />
			</Modal>
		</>
	)
}
