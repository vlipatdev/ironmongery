import { useState, useEffect } from 'react'
import { ProductType } from '../types'

import { getAvailableProductTypes } from '../api'

export const SideBar = () => {
	const [productTypes, setProductTypes] = useState<ProductType[]>([])
	const [selectedProductType, setSelectedProductType] = useState<ProductType>()

	useEffect(() => {
		const getProductTypes = async () => {
			const { productTypes } = await getAvailableProductTypes()
			setProductTypes(productTypes as ProductType[])
		}
		getProductTypes()
	})

	return (
		<aside className="h-full pt-44">
			<p className="font-bold text-lg mb-3">Filters</p>
			<div className="rounded-xl border border-gray-300 bg-white px-4 py-6 w-56">
				<p className="font-bold mb-4">Product types</p>
				<ul className="leading-7">
					<li>All</li>
					{productTypes.map((productType: ProductType) => {
						return <li key={productType.label}>{productType.label}</li>
					})}
				</ul>
			</div>
		</aside>
	)
}
