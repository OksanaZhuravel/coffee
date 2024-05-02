'use client'
import CardList from '@/components/card/CardList'
import { Suspense, useEffect, useState } from 'react'

import Loading from '../loading'
import styles from './page.module.scss'

export default function MenuPage({ params }: { params: { name: string } }) {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const { name } = params
	// console.log(name)
	let apiUrl

	if (process.env.VERCEL_ENV === 'production') {
		apiUrl = process.env.NEXT_PUBLIC_API_URL
	} else {
		apiUrl = process.env.NEXT_API_URL || 'http://localhost:3000'
	}

	useEffect(() => {
		fetch(`${apiUrl}/api/menu/${name}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
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
