import React from 'react';
import { HeartIcon, ShareIcon } from 'lib/icons';
import styles from './artist-details.module.css';
import { IconButton } from 'lib/components/common';

export default function ArtistDetals() {
	return (
		<div className={styles.detailsContainer}>
			<span className={styles.artistText}>Artist</span>
			<h1 className={styles.artistName}>The Avener</h1>
			<span className={styles.artistFollowers}>2,456,310 Followers</span>
			<div className='row'>
				<IconButton className={styles.likeIcon}>
					<HeartIcon />
				</IconButton>
				<IconButton>
					<ShareIcon />
				</IconButton>
			</div>
		</div>
	)
}