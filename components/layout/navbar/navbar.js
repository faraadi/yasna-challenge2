import React from 'react';
import { Button } from 'components/common';
import styles from './navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Button outline className={styles.marginRight}>Follow</Button>
			<Button>Open in Spotify</Button>
		</nav >
	)
}