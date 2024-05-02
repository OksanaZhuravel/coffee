import Input from '@/components/UI/Input/Input'
import styles from '@/components/card/card.module.scss'
import { interRegular } from '@/fonts'
import { CardProps } from '@/interface/interface'
export default function CardItem({ items }: CardProps) {
	console.log(items)

	return (
		<article className={styles.box}>
			<h3 className={`${styles.subtitle} subtitle`}>Irish coffee</h3>
			<p className={`${interRegular.className} ${styles.text} text`}>
				Fragrant black coffee with Jameson Irish whiskey and whipped milk
			</p>
			Card
			<form action='#' className='product__form'>
				<div className='product__size size'>
					<p className='subtitle-h4'>Size</p>
					<div className='size__options'>
						<div
							// key={size}
							onClick={() => console.log('click')}
						>
							<Input
								className='size__input'
								type='radio'
								// value={size}
								// id={size}
								name='size'
								// checked={selectedSize === size}
								onChange={() => console.log('click size')}
							/>
							<label
								// htmlFor={size}
								className='size__label'
							>
								<span className='text'>200 ml</span>
							</label>
						</div>
					</div>
				</div>
			</form>
		</article>
	)
}
