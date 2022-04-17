import NextNProgress from 'nextjs-progressbar'

import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress color="#EDA750" options={{ showSpinner: false }} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
