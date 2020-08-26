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
	//token storage should be placed inside a ref to avoid duplication in multiple renders
	const tokenStorage = useRef(new TokenStorage());

	const [error, setError] = useState(false);

	const authenticationFailedCallback = () => {
		tokenStorage.current.revoke();
		router.push("/");
	}

	const getTokenCallback = () => tokenStorage.current.token;

	const initialize = () => {
		const { err, access_token } = decodeHash(window.location.hash);
		// if decoder function fails to retrieve token from url hash, user will be redirected to auth
		if (!access_token) router.push("/");
		// if Spotify return errors in hash, user will see error page
		else if (err) setError(true);

		else {
			artistService.init({
				// this callback used by baseService when it gets 401 status from Spotify API
				authCallback: authenticationFailedCallback,
				// baseService will call this one, each time it needs the token
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
	//if any kind of error happend when reading from spotify, user will see error page
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
	// before reading data from Spotify API, this components will rendered.
	return <Loading />;
}