import React, { useState, useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getAvailableProductTypes } from '../backend/api'

import Filters from '../components/Filters'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

import { ProductType, SearchQuery } from '../types'

const Search: NextPage = () => {
	const [productTypes, setProductTypes] = useState<ProductType[]>([])
	const [searchQuery, setSearchQuery] = useState<SearchQuery>({ product: '' })

	const defaultProductType: ProductType = { label: 'All', value: '' }
	const [selectedProductType, setSelectedProductType] = useState<ProductType>(defaultProductType)

	const router = useRouter()

	useEffect(() => {
		const getProductTypes = async () => {
			try {
				const { productTypes } = await getAvailableProductTypes()
				setProductTypes([defaultProductType, ...productTypes] as ProductType[])
			} catch (err) {
				setProductTypes([defaultProductType])
			}
		}
		getProductTypes()
	}, [])

	const onSearch = (searchTerm: string) => {
		setSearchQuery({ product: searchTerm.trim() })
		setSelectedProductType(defaultProductType)
		router.push(`search/?query=${searchTerm}`)
	}

	const onSelectOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedProductType = productTypes.find((productType: ProductType) => {
			return productType.value === event.target.value
		})

		setSelectedProductType(selectedProductType!)
		setSearchQuery({ ...searchQuery, productType: selectedProductType?.value })
	}

	return (
		<div>
			<Head>
				<title>Product Search | IronmongeryDirect</title>
				<meta
					name="description"
					content="Buy Door Furniture, Hinges and more from the UK's Largest Ironmongery Range. Available with Same Day Despatch & Free Returns as Standard, all great Trade Prices."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex px-8 md:px-16 xl:px-24 2xl:px-36 gap-10 bg-gray-100 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-150px)]">
				<Filters
					selectedProductType={selectedProductType}
					productTypes={productTypes}
					onProductTypeChange={(productType: ProductType) => {
						setSearchQuery({ ...searchQuery, productType: productType.value })
						setSelectedProductType(productType)
					}}
				/>
				<div className="flex-1">
					<SearchBar
						onSearch={(searchTerm: string) => {
							onSearch(searchTerm)
						}}
					/>
					<div className="flex items-center xl:hidden">
						<p className="font-bold text-sm md:text-lg mt-2 mb-3 mr-8">Product type</p>
						<select
							className="h-12 rounded-full px-4 border-r-[16px] bg-white border-r-white"
							onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
								onSelectOptionChange(event)
							}}
							value={selectedProductType.value}
						>
							{productTypes.map((productType: ProductType) => {
								return (
									<option key={productType.value} value={productType.value}>
										{productType.label}
									</option>
								)
							})}
						</select>
					</div>
					<SearchResults searchQuery={searchQuery} />
				</div>
			</main>
		</div>
	)
}

export default Search
