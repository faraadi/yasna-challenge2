import { Avatar, ArtistDetails } from 'lib/components/app';
import { Row, Col } from 'lib/components/common';

export default function Home() {
	return (
		<Row>
			<Col>
				<Avatar />
			</Col>
			<Col>
				<ArtistDetails />
			</Col>
		</Row>
	);
}