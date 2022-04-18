import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { isMobile } from 'react-device-detect'

import SearchIcon from '../public/search.svg'

interface Props {
	isOnHomePage?: boolean
	onSearch: (searchTerm: string) => void
}

const SearchBar = ({ isOnHomePage, onSearch }: Props) => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const router = useRouter()
	const query = router.query.query as string

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isOnHomePage && !isMobile) inputRef.current?.focus()
	}, [])

	useEffect(() => {
		if (query) {
			onSearch(query)
			setSearchTerm(query)
		}
	}, [query])

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && searchTerm.trim() !== '') {
			onSearch(searchTerm)
		}
	}

	return (
		<div className={`flex flex-col justify-center ${isOnHomePage ? 'items-center' : ''} w-full`}>
			<div className="w-full max-w-6xl py-10">
				{!isOnHomePage && <p className="font-bold text-sm md:text-lg mb-3 w-full">Search</p>}
				<div className="h-12 flex">
					<input
						ref={inputRef}
						className="h-full w-full rounded-l-full border border-gray-300 shadow-inner pl-4 text-lg"
						type="search"
						placeholder="Search for a product"
						onChange={onInputChange}
						onKeyDown={onInputKeyDown}
						value={searchTerm}
					/>
					<button
						onClick={() => {
							if (searchTerm.trim() !== '') onSearch(searchTerm)
						}}
						className="h-full w-16 md:w-32 lg:w-48 bg-golden-yellow font-semibold text-lg rounded-r-full"
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

export default SearchBar
