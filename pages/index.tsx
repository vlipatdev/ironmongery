import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import SearchBar from '../components/SearchBar'

import ironMongeryLogo from '../public/ironmongery_direct_logo.svg'

const Home: NextPage = () => {
	const router = useRouter()

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
			<main className="flex flex-col justify-center items-center h-screen bg-homepage bg-cover">
				<Link href="/" passHref>
					<a className="h-12 w-44 relative mb-10">
						<Image src={ironMongeryLogo} alt="IronMongery Logo" layout="fill" objectFit="contain" />
					</a>
				</Link>
				<p className="text-4xl font-bold text-golden-yellow">UK&apos;s Biggest Range</p>
				<p className="text-4xl font-bold text-white">of Ironmongery</p>
				<div className="w-10/12 md:w-8/12 max-w-[800px] mb-10 md:mb-20">
					<SearchBar
						isOnHomePage
						isCenter
						onSearch={(query: string) => {
							router.push(`/search?query=${query}`)
						}}
					/>
				</div>
			</main>
		</div>
	)
}

export default Home
