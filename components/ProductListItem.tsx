import Image from 'next/image'
import { Product } from '../types'

import { fixDecimal } from '../libs/fix-decimal'

interface Props {
	product: Product
}

const ProductListItem = ({ product }: Props) => {
	const { title, imageURL, price } = product

	return (
		<div className="flex flex-col h-80 rounded-xl border border-gray-300 bg-white p-4 relative">
			<p className="font-bold text-lg">{title}</p>
			<div className="flex-1 m-4 relative">
				<Image src={imageURL} alt={`Photo of ${title}`} layout="fill" objectFit="contain" />
			</div>
			<div className="flex items-center absolute bottom-0 left-0 bg-golden-yellow h-12 p-4 rounded-tr-xl rounded-bl-xl">
				<p className="text-3xl font-bold">£{fixDecimal(price)}</p>
			</div>
		</div>
	)
}

export default ProductListItem
