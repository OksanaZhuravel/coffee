import styles from '@/components/card/card.module.scss'
import { interRegular } from '@/fonts'
import { ItemProps } from '@/interface/interface'
import Image from 'next/image'
import Input from '../UI/Input/Input'

export default function CardItem({ item }: { item: ItemProps }) {
	// console.log(item)

	return (
		<article className={styles.wrap}>
			<Image
				className={styles.img}
				alt={item.title}
				src={item.src}
				width={310}
				height={310}
			/>
			<div className={`${styles.inner}`}>
				<h3 className={`${styles.subtitle} subtitle`}>{item.title}</h3>
				<p className={`${interRegular.className} ${styles.text} text`}>
					{item.text}
				</p>
				<form action='#' className={styles.form}>
					<div className={styles.size}>
						<p className={`${interRegular.className}text`}>Size</p>
						<div className={styles.options}>
							{item.sizes.map((size) => (
								<div key={size.id} onClick={() => console.log('click')}>
									<Input
										className={styles.input}
										type='radio'
										value={size.text}
										id={size.text}
										name='size'
										// checked={selectedSize === size}
										// onChange={() => console.log('click size')}
										placeholder={size.text}
									/>
									<label htmlFor={size.text} className={styles.label}>
										<span className='text'>{size.text}</span>
										<span className='text'>{size.count}</span>
										<span className='text'>{size.units}</span>
									</label>
								</div>
							))}
						</div>
						<div className={styles.options}>
							{item.additives.map((additive, index) => (
								<div key={additive.id} onClick={() => console.log('click')}>
									<Input
										className={styles.input}
										type='checkbox'
										value={additive.text}
										id={additive.text}
										name='additive'
										// checked={selectedSize === size}
										// onChange={() => console.log('click size')}
										placeholder={additive.text}
									/>
									<label htmlFor={additive.text} className={styles.label}>
										<span className='text'>{index + 1}</span>
										<span className='text'>{additive.text}</span>
									</label>
								</div>
							))}
						</div>
					</div>
				</form>
			</div>
		</article>
	)
}
