import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Avatar from './avatar/avatar';
import ArtistDetails from './artist-details/artist-details';
import { Row, Col } from 'lib/components/common';
import { Layout } from 'lib/components';
import { decodeHash } from 'lib/utils';
import { ArtistService, AuthService } from 'lib/service';
import styles from './app.module.css';

export default function Home() {
	const [artistData, setArtistData] = useState(undefined);
	const router = useRouter();
	useEffect(() => {
		const result = decodeHash(window.location.hash);
		const { err, access_token } = result;
		if (err || !access_token) router.push("/");
		else {
			AuthService.setToken();
			sessionStorage.setItem("token", access_token);
			getArtist();
		}
	}, [router]);

	const getArtist = async () => {
		const _artistData = await ArtistService.getArtistInfo();
		console.log(_artistData)
		setArtistData(_artistData);
	}

	if (artistData) {
		const { name, images, followers } = artistData;
		const thumb = images[0].url;
		return (
			<Layout>
				<Row>
					<Col>
						<Avatar thumb={thumb} name={name} />
					</Col>
					<Col>
						<ArtistDetails name={name} followers={followers} />
					</Col>
				</Row>
				<style jsx global>
					{`
						body {
							background-image: url(${thumb});
							background-repeat: no-repeat;
							background-size: cover;
						}
					`}
				</style>
			</Layout>
		);
	}
	else if (artistData === null) {
		return "error";
	}
	return "loading";
}