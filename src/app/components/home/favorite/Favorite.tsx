'use client'
import { inter, interRegular } from '@/fonts'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './favorite.module.scss'

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

const favoriteImages = [
	{
		id: 1,
		src: '/image/slider/coffee-slider-1.png',
		width: 480,
		height: 480,
		title: 'S’mores Frappuccino',
		text: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
		textbox:
			'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
		price: 5.5,
	},
	{
		id: 2,
		src: '/image/slider/coffee-slider-2.png',
		width: 480,
		height: 480,
		title: 'Caramel Macchiato',
		text: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
		textbox:
			'Fragrant and unique classic espresso with rich caramel-peanut syrup, with the addition of delicate cream under whipped thick foam.',
		price: 5.0,
	},
	{
		id: 3,
		src: '/image/slider/coffee-slider-3.png',
		width: 480,
		height: 480,
		title: 'Ice coffee',
		text: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
		textbox:
			'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
		price: 4.5,
	},
]
export default function Favorite() {
	return (
		<section className={styles.favorite} id='favorite'>
			<div className={styles.container}>
				<h2 className={`${styles.title} title`}>
					Choose&nbsp;your&nbsp;
					<span className={`${styles.accent} accent`}>favorite&nbsp;</span>
					&nbsp; coffee
				</h2>
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
					{favoriteImages.map((image) => (
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
			</div>
		</section>
	)
}
