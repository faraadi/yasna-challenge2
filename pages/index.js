import { Auth } from 'lib/components';

// home page, points to auth component.
export default Auth;


// getStaticProps will tells the next to statically exports this page.

export async function getStaticProps(_context) {
	return {
		props: {}
	}
}