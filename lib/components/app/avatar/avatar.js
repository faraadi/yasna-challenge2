import React from 'react';
import styles from './avatar.module.css';

export default function Avatar({ thumb, name }) {
	return (
		<div className={styles.container}>
			<img className={styles.avatar} src={thumb} alt={name + " avatar at spotify"} title={name} draggable={false} />
		</div>
	)
}