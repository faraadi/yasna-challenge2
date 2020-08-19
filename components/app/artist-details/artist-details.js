import React from 'react';
import styles from './artist-details.module.css';
export default function ArtistDetals() {
	return (
		<div className={styles.detailsContainer}>
			<span className={styles.artistText}>Artist</span>
			<h1 className={styles.artistName}>The Avener</h1>
			<span className={styles.artistFollowers}>2,456,310 Followers</span>
		</div  >
	)
}