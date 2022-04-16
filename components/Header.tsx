import Image from 'next/image'
import Link from 'next/link'

import ironMongeryLogo from '../public/ironmongery_direct_logo.svg'

export const Header = () => {
	return (
		<header className="flex justify-center items-center h-[150px] bg-dark-gray relative">
			<Link href="/" passHref>
				<a className="h-full w-44 absolute top-0 left-8">
					<Image src={ironMongeryLogo} alt="IronMongery Logo" layout="fill" objectFit="contain" />
				</a>
			</Link>
			<h1 className="text-4xl text-white">Product search tool</h1>
		</header>
	)
}
