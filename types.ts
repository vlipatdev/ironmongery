export interface ProductType {
	label: string
	value: string
}

export interface Product {
	id: string
	title: string
	productType: string
	imageURL: string
	price: number
}
