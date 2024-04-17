'use client'

import Image from 'next/image'
import styles from './about.module.scss'

const aboutImages = [
	{
		id: 1,
		src: '/image/about/about-1.jpg',
		alt: 'Coffee',
		width: 660,
		height: 590,
	},
	{
		id: 2,
		src: '/image/about/about-2.jpg',
		alt: 'Coffee',
		width: 660,
		height: 430,
	},
	{
		id: 3,
		src: '/image/about/about-3.jpg',
		alt: 'Coffee',
		width: 660,
		height: 430,
	},
	{
		id: 4,
		src: '/image/about/about-4.jpg',
		alt: 'Coffee',
		width: 660,
		height: 590,
	},
	// {
	// 	id: 5,
	// 	src: '/image/about/about-1.jpg',
	// 	alt: 'Coffee',
	// 	width: 660,
	// 	height: 590,
	// },
	// {
	// 	id: 6,
	// 	src: '/image/about/about-2.jpg',
	// 	alt: 'Coffee',
	// 	width: 660,
	// 	height: 430,
	// },
	// {
	// 	id: 7,
	// 	src: '/image/about/about-3.jpg',
	// 	alt: 'Coffee',
	// 	width: 660,
	// 	height: 430,
	// },
	// {
	// 	id: 8,
	// 	src: '/image/about/about-4.jpg',
	// 	alt: 'Coffee',
	// 	width: 660,
	// 	height: 590,
	// },
]

type ImageObject = {
	id: number
	src: string
	alt: string
	width: number
	height: number
}

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
						&nbsp; the perfect and cozy place &nbsp;
					</span>
					where you can enjoy a variety of coffee beverages, to relax, catch up
					with friends, or get some work done.
				</h2>
				<div className={styles.body}>
					{Object.keys(imagesByColumn).map((key) => (
						<div key={key} className={styles.column}>
							{imagesByColumn[parseInt(key, 10)].map((image) => (
								<Image
									key={image.id}
									className={styles.img}
									alt={image.alt}
									src={image.src}
									width={image.width}
									height={image.height}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
