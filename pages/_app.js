import { AppProvider } from 'lib/provider';
import '../styles/index.css';

export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<Component {...pageProps} />;
		</AppProvider>
	)
}