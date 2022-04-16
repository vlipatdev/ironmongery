import { useState, useEffect } from 'react'

import ReactLoading from 'react-loading'

import { fetchProducts } from '../backend/api'
import { Product, SearchQuery } from '../types'

import ProductListEntry from './ProductListEntry'

interface Props {
	query: SearchQuery
}

const SearchResults = ({ query }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [searchResults, setSearchResults] = useState<Product[]>([])

	useEffect(() => {
		const getProducts = async (query: SearchQuery) => {
			setIsLoading(true)
			setErrorMessage('')
			try {
				const { products } = await fetchProducts({
					product: query.product.trim() as string,
					productType: query.productType.value ? query.productType.value : undefined,
				})
				setSearchResults(products)
				if (products.length === 0) setErrorMessage(`No products found.`)
			} catch (err) {
				setErrorMessage('Something went wrong. Please try again later.')
			} finally {
				setIsLoading(false)
			}
		}
		if (query.product) {
			getProducts(query)
		}
	}, [query])

	return (
		<div>
			<p className="font-bold text-lg mt-2 mb-3">Search results</p>
			{isLoading && (
				<div className="w-full flex justify-center">
					<ReactLoading type="bubbles" color="#EDA750" />
				</div>
			)}
			{!isLoading && !errorMessage && searchResults.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
					{searchResults.map((product: Product) => {
						return <ProductListEntry product={product} key={product.id} />
					})}
				</div>
			)}
			{!isLoading && errorMessage && <p className="text-center">{errorMessage}</p>}
		</div>
	)
}

export default SearchResults
