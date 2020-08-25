import React from 'react';
import { SpotifyIcon } from 'lib/icons';
import styles from './loading.module.css';

export default function Loading() {
	return (
		<>
			<div className={styles.container}>
				<SpotifyIcon className={styles.spotifyIcon} />
			</div>
			<style>
				{`
				html, body, #__next {
					height: 100%
				}
			`}
			</style>
		</>
	)
}