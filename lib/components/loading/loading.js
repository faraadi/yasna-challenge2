import React from 'react';
import { SpotifyIcon } from 'lib/icons';
import styles from './loading.module.css';

export default function Loading() {
	return (
		<>
			<div className={styles.container}>
				<span className={styles.iconContainer}>
				<SpotifyIcon className={styles.spotifyIcon} />

				</span>
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