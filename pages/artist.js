import { Artist } from 'lib/components';

//Artist Profile page

export default Artist;

// getStaticProps will tells the next to statically exports this page.

export async function getStaticProps(_context) {
	return {
		props: {}
	}
}