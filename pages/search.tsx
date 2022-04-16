import { useState, useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { useRouter } from 'next/router'

import { getAvailableProductTypes } from '../backend/api'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
import Filters from '../components/Filters'

import { ProductType, SearchQuery } from '../types'

const Home: NextPage = () => {
	const router = useRouter()
	const [selectedProductType, setSelectedProductType] = useState<ProductType>({
		label: 'All',
		value: '',
	})
	const [productTypes, setProductTypes] = useState<ProductType[]>([])
	const [searchQuery, setSearchQuery] = useState<SearchQuery>({
		product: (router.query.query as string) || '',
		productType: { label: 'All', value: '' },
	})

	useEffect(() => {
		const getProductTypes = async () => {
			const { productTypes } = await getAvailableProductTypes()
			setProductTypes([{ label: 'All', value: '' }, ...productTypes] as ProductType[])
		}
		getProductTypes()
	}, [])

	return (
		<div>
			<Head>
				<title>IronmongeryDirect | UK’s Biggest Range | Same Day Despatch</title>
				<meta
					name="description"
					content="Buy Door Furniture, Hinges and more from the UK's Largest Ironmongery Range. Available with Same Day Despatch & Free Returns as Standard, all great Trade Prices."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex px-8 md:px-16 xl:px-24 2xl:px-36 gap-10 bg-gray-100 min-h-screen">
				<Filters
					selectedProductType={selectedProductType}
					productTypes={productTypes}
					onProductTypeChange={(productType: ProductType) => {
						setSearchQuery({ ...searchQuery, productType })
						setSelectedProductType(productType)
					}}
				/>
				<div className="flex-1">
					<SearchBar
						showLabel
						onSearch={(query: string) => {
							setSearchQuery({ product: query, productType: { label: 'All', value: '' } })
							setSelectedProductType({ label: 'All', value: '' })
							router.push(`search/?query=${query}`)
						}}
					/>
					<SearchResults query={searchQuery} />
				</div>
			</main>
		</div>
	)
}

export default Home