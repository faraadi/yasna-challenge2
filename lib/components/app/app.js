import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Avatar from './avatar/avatar';
import ArtistDetails from './artist-details/artist-details';
import { Row, Col } from 'lib/components/common';
import { Layout } from 'lib/components';
import { decodeHash } from 'lib/utils';
import { ArtistService, AuthService } from 'lib/service';
import { useAppContext, useAppDispatch, appActions } from 'lib/provider';

export default function Home() {
	const { artist } = useAppContext();
	const appDispatch = useAppDispatch();

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
		const artistData = await ArtistService.getArtistInfo();
		appDispatch({
			type: appActions.setArtistData,
			payload: artistData
		});
	}

	if (artist) {
		const { name, images, followers } = artist;
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
	else if (artist === null) {
		return "error";
	}
	return "loading";
}