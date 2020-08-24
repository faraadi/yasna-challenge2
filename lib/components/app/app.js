import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Avatar from './avatar/avatar';
import ArtistDetails from './artist-details/artist-details';
import { Row, Col } from 'lib/components/common';
import { Layout } from 'lib/components';
import { decodeHash } from 'lib/utils';
import styles from './app.module.css';

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		const result = decodeHash(window.location.hash);
		console.log(result)
		const { err, access_token } = result;
		if (err || !access_token) {
			router.push("/")
		}
		else {
			// https://open.spotify.com/artist/4eVyI1yiHoRjVrxt5y7gGL?si=kd3Aji2ISBm0EbZjq-9INw
			// spotify:artist:
			fetch("https://api.spotify.com/v1/artists/4eVyI1yiHoRjVrxt5y7gGL", {
				method: "GET",
				headers: {
					'Authorization': 'Bearer ' + access_token
				}
			})
				.then(res => res.json())
				.then(data => console.log(data))
		}
	}, [router]);

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