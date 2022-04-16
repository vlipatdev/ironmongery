import { useState, useEffect } from 'react'

import { ProductType } from '../types'
import { getAvailableProductTypes } from '../backend/api'

interface Props {
	onProductTypeChange: (productType: ProductType) => void
}

export const SideBar = ({ onProductTypeChange }: Props) => {
	const [productTypes, setProductTypes] = useState<ProductType[]>([])
	const [selectedProductType, setSelectedProductType] = useState<ProductType>({
		label: 'All',
		value: '',
	})

	useEffect(() => {
		const getProductTypes = async () => {
			const { productTypes } = await getAvailableProductTypes()
			setProductTypes([{ label: 'All', value: '' }, ...productTypes] as ProductType[])
		}
		getProductTypes()
	}, [])

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
									setSelectedProductType(productType)
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
