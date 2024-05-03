'use client'

import { aboutImages } from '@/api/data'
import { ImageObject } from '@/interface/interface'
import Image from 'next/image'
import styles from './about.module.scss'

export default function About() {
	const imagesByColumn: { [key: number]: ImageObject[] } = aboutImages.reduce(
		(acc: { [key: number]: ImageObject[] }, image, index) => {
			const columnNumber = Math.floor(index / 2) + 1
			if (!acc[columnNumber]) {
				acc[columnNumber] = []
			}
			acc[columnNumber].push(image)
			return acc
		},
		{}
	)
	return (
		<section className={styles.about} id='about'>
			<div className={styles.container}>
				<h2 className={`${styles.title} title`}>
					Resource is
					<span className={`${styles.accent} accent`}>
						&nbsp;the perfect and cozy place&nbsp;
					</span>
					where you can enjoy a variety of coffee beverages, to relax, catch up
					with friends, or get some work done.
				</h2>
				<div className={styles.body}>
					{Object.keys(imagesByColumn).map((key) => (
						<div key={key} className={styles.column}>
							{imagesByColumn[parseInt(key, 10)].map((image) => (
								<div className={styles.box} key={image.id}>
									<Image
										className={`${styles.img} ${
											image.height <= 589 ? styles.small : ''
										}`}
										alt={image.alt}
										src={image.src}
										width={image.width}
										height={image.height}
									/>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
