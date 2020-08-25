import React from 'react';
import { IconButton, Row, Button } from 'lib/components/common';
import { HeartIcon, ShareIcon } from 'lib/icons';
import styles from './artist-details.module.css';

export default function ArtistDetals({ name, followers, profileUrl }) {
	return (
		<div className={styles.detailsContainer}>
			<span className={styles.artistText}>Artist</span>
			<h1 className={styles.artistName}>{name}</h1>
			<span className={styles.artistFollowers}>{followers.total} Followers</span>
			<Row>
				<a className={styles.marginRight} href={profileUrl} target='_blank' rel='noreferrer noopener'>
					<Button fill>Open in Spotify</Button>
				</a>
				<IconButton>
					<ShareIcon />
				</IconButton>
			</Row>
		</div>
	)
}