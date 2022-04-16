export const SideBar = () => {
	return (
		<aside className="h-full pt-44">
			<p className="font-bold text-lg mb-3">Filters</p>
			<div className="rounded-xl border border-gray-300 bg-white px-4 py-6 w-56">
				<p className="font-bold mb-4">Product types</p>
				{/* TODO: map */}
				<ul className="leading-7">
					<li className="font-black">All</li>
					<li>Ball Bearing</li>
					<li>Concealed Hinge</li>
					<li>Flush Hinge</li>
					<li>Tee Hinge</li>
				</ul>
			</div>
		</aside>
	)
}
