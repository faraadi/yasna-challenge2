import Document, { Html, Head, Main, NextScript } from 'next/document';

/*
	Custom Document template and tags. this is not a page, but a document template to handle seo stuff and meta tags.
*/

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="manifest.json" />
					<link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />

					<meta name='application-name' content='Yasna Front-End Hiring Challenge' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					<meta name='apple-mobile-web-app-title' content='Yasna Front-End Hiring Challenge' />
					<meta name='description' content='A Front-End Hiring Challenge for Yasna Team' />
					<meta name='keywords' content='Front End, Front-End, Challenge, Hiring Chanllegne, React, Javascript, Nextjs' />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='msapplication-TileColor' content='#05C782' />
					<meta name='msapplication-tap-highlight' content='no' />
					<meta name='theme-color' content='#05C782' />

					<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
					<link rel='mask-icon' href='/mask-icon.svg' color='#05C782' />
					<link rel='shortcut icon' href='/favicon.ico' />

					<meta name='twitter:card' content='Yasna Challenge' />
					<meta name='twitter:url' content={process.env.NEXT_PUBLIC_BASE_URL} />
					<meta name='twitter:title' content='Yasna Challenge' />
					<meta name='twitter:description' content='Yasna Front-End Hiring Challenge' />
					<meta name='twitter:creator' content='@DavidWShadow' />
					<meta property='og:type' content='website' />
					<meta property='og:title' content='Yasna Challenge' />
					<meta property='og:description' content='Yasna Front-End Hiring Challenge' />
					<meta property='og:site_name' content='Yasna Front-End Hiring Challenge' />
					<meta property='og:url' content={process.env.NEXT_PUBLIC_BASE_URL} />
					<meta property='og:image' content='/apple-touch-icon.png' />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}