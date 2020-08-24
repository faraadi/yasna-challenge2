import { useEffect } from 'react';
import { Avatar, ArtistDetails } from 'lib/components/app';
import { Row, Col } from 'lib/components/common';
import { Layout } from 'lib/components';
import { decodeHash } from 'lib/utils';

export default function Home() {
	useEffect(() => {
		const result = decodeHash(window.location.hash);
		if (result.err) {

		}
		else if (!result.access_token === null) {

		}
		else {

		}
	}, []);

	return (
		<Layout>
			<Row>
				<Col>
					<Avatar />
				</Col>
				<Col>
					<ArtistDetails />
				</Col>
			</Row>
		</Layout>
	);
}