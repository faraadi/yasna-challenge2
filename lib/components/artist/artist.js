import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, Loading, Error } from 'lib/components';
import { Row, Col } from 'lib/components/common';
import { ArtistService } from 'lib/service';
import { decodeHash, TokenStorage } from 'lib/utils';
import { ArtistAvatar, ArtistDetails, ArtistWorks } from './components';
import artistService from 'lib/service/artist.service';
import styles from './artist.module.css';

export default function Home() {
	const [artistData, setArtistData] = useState(null);
	const router = useRouter();
	const tokenStorage = useRef(new TokenStorage());

	const [error, setError] = useState(false);

	const authenticationFailedCallback = () => {
		tokenStorage.current.revoke();
		router.push("/");
	}

	const getTokenCallback = () => tokenStorage.current.token;

	const initialize = () => {
		const { err, access_token } = decodeHash(window.location.hash);
		if (!access_token) router.push("/");

		else if (err) setError(true);

		else {
			artistService.init({
				authCallback: authenticationFailedCallback,
				tokenCallback: getTokenCallback
			});
			tokenStorage.current.token = access_token;
			getArtistData();
		}
	}

	useEffect(initialize, [router]);

	const getArtistData = async () => {
		const artistData = await ArtistService.getAllArtistData(authenticationFailedCallback);
		if (artistData) {
			setArtistData(artistData);
		}
		else setError(true);
	}
	if (error) return <Error />;

	if (artistData) {
		const { info, singles, playlists, albums } = artistData;
		const { name, images, followers } = info;
		const thumb = images[0].url;
		return (
			<>
				<Head>
					<title>{name} | Yasna Challange</title>
				</Head>
				<Layout>
					<Row className={styles.artistContainer}>
						<Col>
							<ArtistAvatar thumb={thumb} name={name} />
						</Col>
						<Col xs={12} md={'auto'}>
							<ArtistDetails name={name} followers={followers} profileUrl={info.external_urls.spotify} />
						</Col>
					</Row>
					<Row>
						<ArtistWorks singles={singles} playlists={playlists} albums={albums} />
					</Row>
					<style jsx global>
						{`
						body {
							background-image: url(${thumb});
							background-repeat: no-repeat;
							background-size: cover;
							background-attachment: fixed
						}
					`}
					</style>
				</Layout>
			</>
		);
	}

	return <Loading />;
}