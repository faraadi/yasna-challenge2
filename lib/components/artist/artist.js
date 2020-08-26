import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, Loading, Error } from 'lib/components';
import { Row, Col } from 'lib/components/common';
import { ArtistService } from 'lib/service';
import { decodeHash } from 'lib/utils';
import { ArtistAvatar, ArtistDetails, ArtistWorks } from './components';
import artistService from 'lib/service/artist.service';

export default function Home() {
	const [artistData, setArtistData] = useState(null);
	const router = useRouter();

	const [error, setError] = useState(false);

	useEffect(() => {
		artistService.init(authenticationFailedCallback);
		const result = decodeHash(window.location.hash);
		const { err, access_token } = result;
		if (!access_token) router.push("/");
		else if (err) {
			setError(true);
		}
		else {
			sessionStorage.setItem("token", access_token);
			getArtistData();
		}
	}, [router]);


	const getArtistData = async () => {
		const artistData = await ArtistService.getAllArtistData(authenticationFailedCallback);
		if (artistData) {
			setArtistData(artistData);
		}
		else setError(true);
	}

	const authenticationFailedCallback = () => {
		router.push("/");
		sessionStorage.removeItem("token");
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
					<Row>
						<Col>
							<ArtistAvatar thumb={thumb} name={name} />
						</Col>
						<Col>
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
						}
					`}
					</style>
				</Layout>
			</>
		);
	}

	return <Loading />;
}