import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { inter } from '@/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import './styles/globals.scss'

export const metadata: Metadata = {
	title: 'Coffee House',
	description: 'Enjoy premium coffee at our charming cafe',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={inter.className}>
			<body>
				<div className='wrapper'>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
				<SpeedInsights />
			</body>
		</html>
	)
}
