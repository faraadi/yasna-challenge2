import Head from 'next/head';
import '../styles/index.css';

/*
	this is not a standalone page! its just a constant template between variuos pages to load global css and head tags.
*/

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}