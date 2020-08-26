import React from 'react';
import { IconButton, Col, Button } from 'lib/components/common';
import { ShareIcon } from 'lib/icons';
import styles from './artist-details.module.css';

export default function ArtistDetals({ name, followers, profileUrl, spotifyURI }) {
	const followersNum = (Number(followers.total) / 1000).toFixed(1);

	const onCopyURI = () => navigator.clipboard.writeText(spotifyURI);
	return (
		<div className={styles.detailsContainer}>
			<span className={styles.artistText}>Artist</span>
			<h1 className={styles.artistName}>{name}</h1>
			<span className={styles.artistFollowers}>{followersNum}K Followers</span>
			<Col>
				<a className={styles.marginRight} href={profileUrl} target='_blank' rel='noreferrer noopener'>
					<Button fill>Open in Spotify</Button>
				</a>
				<IconButton title='copy spotify uri to clipboard' onClick={onCopyURI}>
					<ShareIcon />
				</IconButton>
			</Col>
		</div>
	)
}