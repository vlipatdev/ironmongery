import { useState, useEffect } from 'react'
import { fetchProducts } from '../api'
import { Product } from '../types'
import { ProductListEntry } from './ProductListEntry'

export const SearchResults = () => {
	const [searchResults, setSearchResults] = useState<Product[]>([])

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { products } = await fetchProducts({ product: 'hinge' })
				setSearchResults(products)
			} catch (err) {
				// TODO: display error message on front end
				console.error(err)
			}
		}
		getProducts()
	}, [])

	return (
		<div>
			<p className="font-bold text-lg mt-2 mb-3">Search results</p>
			<div className="grid grid-cols-3 gap-4">
				{searchResults.map((product: Product) => {
					return <ProductListEntry product={product} key={product.id} />
				})}
			</div>
		</div>
	)
}
