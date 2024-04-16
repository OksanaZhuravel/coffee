import type { Metadata } from 'next'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { inter } from './fonts'
import './globals.scss'
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
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
