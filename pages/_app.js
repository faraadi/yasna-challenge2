import Head from 'next/head';
import '../styles/index.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='A Front-End Hiring Challenge for Yasna Team'
				/>
				<meta
					name='keywords'
					content='Front End, Front-End, Challenge, Hiring Chanllegne, React, Javascript, Nextjs'
				/>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
			</Head>
			<Component {...pageProps} />
		</>
	)
}