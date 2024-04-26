import { ReactNode, useEffect, useState } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import styles from './modal.module.scss'
export interface ModalProps {
	open: boolean
	onCancel: () => void
	children: ReactNode
}

const generateClassName = (open: boolean) => {
	return open ? `${styles.modal} ${styles.modal_show}` : styles.modal
}

const Modal: React.FC<ModalProps> = ({ open, onCancel, children }) => {
	const [isModalOpen, setModalOpen] = useState(open)

	useEffect(() => {
		setModalOpen(open)
	}, [open])

	const handleCancel = () => {
		setModalOpen(false)
		onCancel && onCancel()
		console.log('handleCancel')
	}
	const handleOutsideClick = (e: MouseEvent) => {
		e.target
		if (e.target instanceof Element && !e.target.closest(`${styles.content}`)) {
			handleCancel()
		}
	}
	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleCancel()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [])
	useEffect(() => {
		document.body.classList.toggle('modal__show', open)
	}, [open, onCancel])

	return (
		<div className={generateClassName(open)}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
					<div className={styles.caption}>
						<IoIosInformationCircleOutline size={16} />
						<p className='text-small'>
							The cost is approximate, download our mobile application to place
							an order. Collect points on your loyalty card and enjoy your
							favorite coffee with up to 20% discount.
						</p>
						<span className={`${styles.button} text`} onClick={handleCancel}>
							Close
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
