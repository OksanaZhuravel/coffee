'use client'
import CardList from '@/components/card/CardList'
import { useEffect, useState } from 'react'
import styles from './menupage.module.scss'
// type Params = {
// 	name: string
// }
export default function MenuPage({ params }: { params: { name: string } }) {
	const [items, setItems] = useState([])

	const { name } = params
	// console.log(name)

	useEffect(() => {
		fetch(`/api/menu/${name}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setItems(data.items)
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}, [params])
	console.log(items)

	return (
		<div className={styles.container}>
			<CardList items={items} />
		</div>
	)
}
