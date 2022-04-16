import { useState } from 'react'

interface Props {
	onSearch: (searchQuery: string) => void
}

export const SearchBar = ({ onSearch }: Props) => {
	const [searchQuery, setSearchQuery] = useState<string>('')

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

	return (
		<div className="flex flex-col justify-center w-full">
			<div className="w-full max-w-6xl py-10">
				<p className="font-bold text-lg mb-3 w-full">Search</p>
				<div className="h-12 flex">
					<input
						className="h-full w-full rounded-l-full border border-gray-300 shadow-inner pl-4 text-lg"
						type="search"
						placeholder="Search for a product"
						onChange={onInputChange}
						onKeyDown={onInputKeyDown}
					></input>
					<button
						onClick={() => {
							if (searchQuery) onSearch(searchQuery)
						}}
						className="h-full w-48 bg-golden-yellow font-semibold text-lg rounded-r-full"
					>
						Search
					</button>
				</div>
			</div>
		</div>
	)
}
