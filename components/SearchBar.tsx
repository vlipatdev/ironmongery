export const SearchBar = () => {
	return (
		<div className="flex flex-col justify-center w-full">
			<div className="w-full max-w-6xl py-10">
				<p className="font-bold text-lg mb-3 w-full">Search</p>
				<div className="h-12 flex">
					<input
						className="h-full w-full rounded-l-full border border-gray-300 shadow-inner pl-4 text-lg"
						type="search"
						placeholder="Search for a product"
					></input>
					<button className="h-full w-48 bg-golden-yellow font-semibold text-lg rounded-r-full">
						Search
					</button>
				</div>
			</div>
		</div>
	)
}
