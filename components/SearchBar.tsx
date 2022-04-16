export const SearchBar = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full bg-gray-100">
			<div className="w-full max-w-6xl px-8 py-10">
				<p className="font-bold text-lg mb-3 w-full">Search</p>
				<div className="h-12 flex">
					<input
						className="h-full w-full rounded-l-full border shadow-inner pl-4 text-lg"
						type="search"
						placeholder="Search for a product"
					></input>
					<button className="h-full w-36 bg-golden-yellow font-semibold text-lg rounded-r-full">
						Search
					</button>
				</div>
			</div>
		</div>
	)
}
