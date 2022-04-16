import Image from 'next/image'
import Link from 'next/link'

import ironMongeryLogo from '../public/ironmongery_direct_logo.svg'

export const Header = () => {
	return (
		<header className="flex justify-center items-center h-[200px] md:h-[150px] bg-dark-gray relative">
			<Link href="/" passHref>
				<a className="h-8 w-36 md:h-12 md:w-44 absolute top-1/3 md:top-1/2 -translate-y-1/2 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0">
					<Image src={ironMongeryLogo} alt="IronMongery Logo" layout="fill" objectFit="contain" />
				</a>
			</Link>
			<h1 className="mt-20 md:mt-0 text-2xl md:text-3xl lg:text-4xl text-white">
				Product search tool
			</h1>
		</header>
	)
}
