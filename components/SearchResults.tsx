import { useState, useEffect } from 'react'
import { fetchProducts } from '../api'
import { Product } from '../types'
import { ProductListEntry } from './ProductListEntry'

export const SearchResults = () => {
	const [isLoading, setIsLoading] = useState<boolean>()
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [searchResults, setSearchResults] = useState<Product[]>([])

	useEffect(() => {
		// TODO: trim string before fetching
		const getProducts = async () => {
			setIsLoading(true)
			setErrorMessage('')
			try {
				const { products } = await fetchProducts({ product: 'hinge' })
				setSearchResults(products)
			} catch (err: any) {
				switch (err.message) {
					case '`search term` must be provided':
						setErrorMessage('Search term must be provided.')
						break
					default:
						setErrorMessage('An unexpected error occurred. Please try again later.')
						break
				}
			} finally {
				setIsLoading(false)
			}
		}
		getProducts()
	}, [])

	return (
		<div>
			<p className="font-bold text-lg mt-2 mb-3">Search results</p>
			<div className="grid grid-cols-3 gap-4">
				{!isLoading &&
					searchResults.map((product: Product) => {
						return <ProductListEntry product={product} key={product.id} />
					})}
			</div>
			{errorMessage && <p className="text-center">{errorMessage}</p>}
		</div>
	)
}
