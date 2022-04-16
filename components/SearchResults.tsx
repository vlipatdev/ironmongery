import { useState, useEffect } from 'react'
import { fetchProducts } from '../api'
import { Product } from '../types'
import { ProductListEntry } from './ProductListEntry'

interface Props {
	query: string
}

export const SearchResults = ({ query }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [searchResults, setSearchResults] = useState<Product[]>([])

	useEffect(() => {
		const getProducts = async (query: string) => {
			setIsLoading(true)
			setErrorMessage('')
			try {
				const { products } = await fetchProducts({ product: query.trim() })
				setSearchResults(products)
				if (products.length === 0) setErrorMessage(`No products found for '${query}'.`)
			} catch (err: any) {
				setErrorMessage('Something went wrong. Please try again later.')
			} finally {
				setIsLoading(false)
			}
		}
		if (query) {
			console.log(query)
			getProducts(query)
		}
	}, [query])

	return (
		<div>
			<p className="font-bold text-lg mt-2 mb-3">Search results</p>
			<div className="grid grid-cols-3 gap-4">
				{!isLoading &&
					searchResults.length > 0 &&
					searchResults.map((product: Product) => {
						return <ProductListEntry product={product} key={product.id} />
					})}
			</div>
			{errorMessage && <p className="text-center">{errorMessage}</p>}
		</div>
	)
}
