import React from 'react';
import styles from './avatar.module.css';

export default function Avatar() {
	return (
		<div className={styles.container}>
			<img className={styles.avatar} src='cover.jpg' alt='Artist Avatar' title='Avener' draggable={false} />
		</div>
	)
}