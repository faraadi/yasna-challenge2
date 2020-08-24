import React from 'react';
import { IconButton, Row } from 'lib/components/common';
import { HeartIcon, ShareIcon } from 'lib/icons';
import styles from './artist-details.module.css';

export default function ArtistDetals({ name, followers }) {
	return (
		<div className={styles.detailsContainer}>
			<span className={styles.artistText}>Artist</span>
			<h1 className={styles.artistName}>{name}</h1>
			<span className={styles.artistFollowers}>{followers.total} Followers</span>
			<Row>
				<IconButton className={styles.likeIcon}>
					<HeartIcon />
				</IconButton>
				<IconButton>
					<ShareIcon />
				</IconButton>
			</Row>
		</div>
	)
}