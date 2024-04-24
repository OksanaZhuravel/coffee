import NavBarMenu from '@/components/nav/navBarMenu/NavBarMenu'
import './subtitle.module.scss'
import styles from './subtitle.module.scss'

export default function Subtitle() {
	return (
		<div className={styles.container}>
			<h1 className={`${styles.title} title`}>
				Behind each of our cups hides&nbsp;an
				<span className={`${styles.accent} accent`}> amazing surprise</span>
			</h1>
			<NavBarMenu />
		</div>
	)
}
