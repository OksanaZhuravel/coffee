'use client'
import { inter, interRegular } from '@/fonts'
import { FavoriteItemProps } from '@/interface/interface'
import Loading from '@/loading'
import { formatter } from '@/utils/formatter'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './favorite.module.scss'

export default function Favorite() {
	const [favorites, setFavorites] = useState<FavoriteItemProps[]>([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		fetch(`/api/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then((data) => {
				if (!data) {
					throw new Error('Empty response or invalid JSON')
				}
				setFavorites(data.favorites)
				setLoading(false)
			})
			.catch((error) => {
				console.error('Error:', error)
				setLoading(false)
			})
	}, [])
	if (loading) {
		return <Loading />
	}
	return (
		<Suspense fallback={<Loading />}>
			<section className={styles.favorite} id='favorite'>
				<div className={styles.container}>
					<h2 className={`${styles.title} title`}>
						Choose&nbsp;your&nbsp;
						<span className={`${styles.accent} accent`}>favorite&nbsp;</span>
						&nbsp; coffee
					</h2>
					{favorites && favorites.length > 0 && (
						<Swiper
							modules={[Navigation, Pagination]}
							className={`${interRegular.className}`}
							spaceBetween={104}
							slidesPerView={1}
							navigation={{
								prevEl: '.swiper-button-prev',
								nextEl: '.swiper-button-next',
							}}
							pagination={{ clickable: true }}
							centeredSlides={true}
						>
							{favorites.map((image) => (
								<SwiperSlide key={image.id} className={styles.article}>
									<Image
										className={styles.img}
										alt={image.title}
										src={image.src}
										width={image.width}
										height={image.height}
									/>
									<div className={`${inter.className} ${styles.box}`}>
										<h3 className='subtitle'>{image.title}</h3>
										<p
											className={`${interRegular.className} ${styles.text} text desktop-only`}
										>
											{image.text}
										</p>
										<p
											className={`${interRegular.className} ${styles.textbox} text mobile-only`}
										>
											{image.textbox}
										</p>
										<p className='subtitle'>{formatter.format(image.price)}</p>
									</div>
								</SwiperSlide>
							))}
							<div className='swiper-button-prev'>
								<IoIosArrowRoundBack size={24} />
							</div>
							<div className='swiper-button-next'>
								<IoIosArrowRoundForward size={24} />
							</div>
						</Swiper>
					)}
				</div>
			</section>
		</Suspense>
	)
}
