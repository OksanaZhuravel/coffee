export interface NavBarProps {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface LogoProps {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Size {
	text: string
	count: number
	units: string
}
export interface CardProps {
	id: number
	src: string
	title: string
	text: string
	price: number
	size: Size[]
	additives: string
}
