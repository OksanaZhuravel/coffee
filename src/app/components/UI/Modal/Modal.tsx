import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import styles from './modal.module.scss'
export interface ModalProps {
	open: boolean
	onCancel: () => void
	children: ReactNode
}
const Modal: React.FC<ModalProps> = ({ open, children, onCancel }) => {
	useEffect(() => {
		if (open) {
			document.body.classList.add('modal__show')
		} else {
			document.body.classList.remove('modal__show')
		}
		return () => {
			document.body.classList.remove('modal__show')
		}
	}, [open])
	const handleCancel = () => {
		onCancel()
	}

	const handleOutsideClick = (e: MouseEvent) => {
		if (
			!(e.target instanceof Element) ||
			e.target.closest(`.${styles.wrapper}`) === null
		) {
			handleCancel()
		}
	}

	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleCancel()
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.addEventListener('mousedown', handleOutsideClick)
			document.addEventListener('keyup', handleKeyUp)
		}
		return () => {
			if (typeof window !== 'undefined') {
				document.removeEventListener('mousedown', handleOutsideClick)
				document.removeEventListener('keyup', handleKeyUp)
			}
		}
	}, [])
	return (
		<>
			<Head>
				<body className={open ? 'modal__show' : ''} />
			</Head>
			<div className={`${styles.modal} ${open ? styles.modal_show : ''}`}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						{children}
						<div className={styles.caption}>
							<IoIosInformationCircleOutline size={16} />
							<p className='text-small'>
								The cost is approximate, download our mobile application to
								place an order. Collect points on your loyalty card and enjoy
								your favorite coffee with up to 20% discount.
							</p>
							<span className={`${styles.button} text`} onClick={handleCancel}>
								Close
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
