export interface NavBarProps {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface LogoProps {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Size {
	id: number
	text: string
	count: number
	units: string
}
export interface Additive {
	id: number
	text: string
}

export interface ItemProps {
	id: number
	name: string
	src: string
	title: string
	text: string
	price: number
	sizes: Size[]
	additives: Additive[]
}
export interface CardProps {
	items: ItemProps[]
}

// export interface ItemsProps {
// 	id: number
// 	name: string
// 	src: string
// 	title: string
// 	text: string
// 	price: number
// size: Size[]
// additives: Additive[]
// }
