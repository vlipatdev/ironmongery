export interface Product {
	id: string
	title: string
	productType: string
	imageURL: string
	price: number
}

export interface ProductType {
	label: string
	value: string
}

export interface SearchQuery {
	product: string
	productType?: string
}
