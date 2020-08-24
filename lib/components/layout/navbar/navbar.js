import React from 'react';
import { Button } from 'lib/components/common';
import { useAppContext } from 'lib/provider';
import styles from './navbar.module.css';

export default function Navbar() {
	const { artist } = useAppContext();

	return (
		<nav className={styles.navbar}>
			<a href={artist.external_urls.spotify} target='_blank' rel='noreferrer noopener'>
				<Button fill>Open in Spotify</Button>
			</a>
		</nav >
	)
}