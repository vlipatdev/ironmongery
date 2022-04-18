import { useState, useEffect } from 'react'

import ReactLoading from 'react-loading'

import { fetchProducts } from '../backend/api'
import { Product, SearchQuery } from '../types'

import ProductListItem from './ProductListItem'

interface Props {
	searchQuery: SearchQuery
}

const SearchResults = ({ searchQuery }: Props) => {
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [searchResults, setSearchResults] = useState<Product[]>([])

	useEffect(() => {
		const getProducts = async (searchQuery: SearchQuery) => {
			setIsLoading(true)
			setErrorMessage('')

			if (!searchQuery.productType) searchQuery.productType = undefined

			try {
				const { products } = await fetchProducts(searchQuery)
				setSearchResults(products)
				if (products.length === 0) setErrorMessage(`No products found.`)
			} catch (err) {
				setErrorMessage('Oops! Something went wrong. Please try again later.')
			} finally {
				setIsLoading(false)
			}
		}

		if (searchQuery.product) {
			getProducts(searchQuery)
		}
	}, [searchQuery])

	return (
		<div>
			<p className="font-bold text-sm md:text-lg mt-2 mb-3">Search results</p>
			{isLoading && (
				<div className="w-full flex justify-center mt-10">
					<ReactLoading type="spin" color="#EDA750" height={40} width={40} />
				</div>
			)}

			{!isLoading && !errorMessage && searchResults.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
					{searchResults.map((product: Product) => {
						return <ProductListItem key={product.id} product={product} />
					})}
				</div>
			)}

			{!isLoading && errorMessage && (
				<p className="text-center text-gray-500 mt-10">{errorMessage}</p>
			)}
		</div>
	)
}

export default SearchResults
