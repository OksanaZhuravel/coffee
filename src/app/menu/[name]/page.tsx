'use client'
import CardList from '@/components/card/CardList'
import { Suspense, useEffect, useState } from 'react'

import Loading from '@/loading'
import styles from './page.module.scss'

export default function MenuPage({ params }: { params: { name: string } }) {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const { name } = params
	// console.log(name)

	useEffect(() => {
		fetch(`/api/menu/${name}`, {
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
				setItems(data.items)
				setLoading(false)
			})
			.catch((error) => {
				console.error('Error:', error)
				setLoading(false)
			})
	}, [params])
	// console.log(items)
	if (loading) {
		return <Loading />
	}
	return (
		<div className={styles.container}>
			<Suspense fallback={<Loading />}>
				<CardList items={items} />
			</Suspense>
		</div>
	)
}
