import { ProductType } from '../types'

interface Props {
	selectedProductType: ProductType
	productTypes: ProductType[]
	onProductTypeChange: (productType: ProductType) => void
}

const Filters = ({ productTypes, onProductTypeChange, selectedProductType }: Props) => {
	return (
		<aside className="h-full pt-44 hidden xl:block">
			<p className="font-bold text-lg mb-3">Filters</p>
			<div className="rounded-xl border border-gray-300 bg-white px-4 py-6 w-56">
				<p className="font-bold mb-4">Product types</p>
				<ul className="leading-7">
					{productTypes.map((productType: ProductType) => {
						return (
							<li
								className={`cursor-pointer ${
									selectedProductType.value === productType.value ? 'font-black' : ''
								}`}
								key={productType.label}
								onClick={() => {
									onProductTypeChange(productType)
								}}
							>
								{productType.label}
							</li>
						)
					})}
				</ul>
			</div>
		</aside>
	)
}

export default Filters
