import styles from '@/components/card/card.module.scss'
import { interRegular } from '@/fonts'
import { ItemProps } from '@/interface/interface'
import { formatter } from '@/utils/formatter'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import Input from '../UI/Input/Input'

export default function CardItem({ item }: { item: ItemProps }) {
	console.log(item)
	const [selectedSize, setSelectedSize] = useState<string | null>(null)
	const [selectedAdditive, setSelectedAdditive] = useState<string[]>([])
	const toggleAdditive = (additive: string) => {
		setSelectedAdditive((prev) =>
			prev.includes(additive)
				? prev.filter((item) => item !== additive)
				: [...prev, additive]
		)
	}
	return (
		<article className={styles.wrap}>
			<Image
				className={styles.image}
				alt={item.title}
				src={item.src}
				width={310}
				height={310}
			/>
			<div>
				<h3 className={`${styles.subtitle} subtitle`}>{item.title}</h3>
				<p className={`${interRegular.className} ${styles.text} text`}>
					{item.text}
				</p>
				<form action='#' className={styles.form}>
					<div className={styles.size}>
						<p className={`${interRegular.className} text`}>Size</p>
						<div className={styles.list}>
							{item.sizes.map((size) => (
								<div
									className={styles.item}
									key={size.id}
									onClick={() => setSelectedSize(size.text)}
								>
									<Input
										className={styles.input}
										type='radio'
										value={size.text}
										id={size.text}
										name='size'
									/>
									<label
										htmlFor={size.text}
										className={clsx(styles.label, {
											[styles.active]: size.text === selectedSize,
										})}
									>
										<span className={`${styles.account} text`}>
											{size.text}
										</span>
										<span className='text'>
											{size.count} {size.units}
										</span>
									</label>
								</div>
							))}
						</div>
					</div>
					<div className={styles.additive}>
						<p className={`${interRegular.className} text`}>Additives</p>
						<div className={styles.list}>
							{item.additives.map((additive, index) => (
								<div className={styles.item} key={additive.id}>
									<Input
										className={styles.input}
										type='checkbox'
										value={additive.text}
										id={additive.text}
										name='additive'
									/>
									<label
										htmlFor={additive.text}
										className={clsx(styles.label, {
											[styles.active]: selectedAdditive.includes(additive.text),
										})}
										onClick={() => toggleAdditive(additive.text)}
									>
										<span className={`${styles.account} text`}>
											{index + 1}
										</span>
										<span className='text'>{additive.text}</span>
									</label>
								</div>
							))}
						</div>
					</div>
				</form>
				<div className={`${styles.total} subtitle`}>
					<span>Total:</span>
					<span>{formatter.format(item.price)}</span>
				</div>
			</div>
		</article>
	)
}
