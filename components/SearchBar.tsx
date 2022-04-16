import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import SearchIcon from '../public/search.svg'

interface Props {
	onSearch: (searchQuery: string) => void
	showLabel?: boolean
	isCenter?: boolean
}

export const SearchBar = ({ onSearch, showLabel, isCenter }: Props) => {
	const router = useRouter()
	const query = router.query.query as string

	const [searchQuery, setSearchQuery] = useState<string>(query)

	const onInputChange = (event: React.SyntheticEvent) => {
		const target = event.target as typeof event.target & {
			value: string
		}
		setSearchQuery(target.value)
	}

	const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && searchQuery) {
			onSearch(searchQuery)
		}
	}

	useEffect(() => {
		if (query) {
			onSearch(query)
		}
	}, [query])

	return (
		<div className={`flex flex-col justify-center ${isCenter ? 'items-center' : ''} w-full`}>
			<div className="w-full max-w-6xl py-10">
				{showLabel && <p className="font-bold text-lg mb-3 w-full">Search</p>}
				<div className="h-12 flex">
					<input
						className="h-full w-full rounded-l-full border border-gray-300 shadow-inner pl-4 text-lg"
						type="search"
						placeholder="Search for a product"
						onChange={onInputChange}
						onKeyDown={onInputKeyDown}
						value={searchQuery}
					></input>
					<button
						onClick={() => {
							if (searchQuery) onSearch(searchQuery)
						}}
						className="h-full w-16 md:w-48 bg-golden-yellow font-semibold text-lg rounded-r-full"
					>
						<p className="hidden md:block">Search</p>
						<div className="md:hidden h-full flex justify-center items-center">
							<Image src={SearchIcon} height={20} width={20} alt="Search Icon" />
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}
