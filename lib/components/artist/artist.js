import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ArtistAvatar from './artist-avatar/artist-avatar';
import ArtistDetails from './artist-details/artist-details';
import { Row, Col } from 'lib/components/common';
import { Layout, Loading, Error } from 'lib/components';
import { decodeHash } from 'lib/utils';
import { ArtistService, AuthService } from 'lib/service';
import { useAppContext, useAppDispatch, appActions } from 'lib/provider';

export default function Home() {
	const { artist } = useAppContext();
	const appDispatch = useAppDispatch();
	const router = useRouter();

	const [error, setError] = useState(false);

	useEffect(() => {
		const result = decodeHash(window.location.hash);
		const { err, access_token } = result;
		if (err || !access_token) router.push("/");
		else {
			AuthService.setToken();
			sessionStorage.setItem("token", access_token);
			getArtistData();
		}
	}, [router]);

	const getArtistData = async () => {
		const artistData = await ArtistService.getAllArtistData();
		console.log(artistData)
		if (artistData) {
			appDispatch({
				type: appActions.setArtistData,
				payload: artistData
			});
		}
		else setError(true);
	}

	if (error) return <Error />
	if (artist) {
		const { name, images, followers } = artist;
		const thumb = images[0].url;
		return (
			<>
				<Head>
					<title>{name} | Yasna Challange</title>
				</Head>
				<Layout>
					<Row>
						<Col>
							<ArtistAvatar thumb={thumb} name={name} />
						</Col>
						<Col>
							<ArtistDetails name={name} followers={followers} profileUrl={artist.external_urls.spotify} />
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
			</>
		);
	}
	return <Loading />;
}