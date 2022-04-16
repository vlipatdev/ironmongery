import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { SearchResults } from '../components/SearchResults'
import { SideBar } from '../components/SideBar'

const Home: NextPage = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')

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
			<main className="flex px-36 gap-10 bg-gray-100 min-h-screen">
				<SideBar />
				<div className="flex-1">
					<SearchBar
						onSearch={(query: string) => {
							setSearchQuery(query)
						}}
					/>
					<SearchResults query={searchQuery} />
				</div>
			</main>
		</div>
	)
}

export default Home
