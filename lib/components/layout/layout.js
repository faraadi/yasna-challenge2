import React from 'react';
import styles from './layout.module.css';

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<div className={styles.backdrop} />
			<div className={styles.wrapper}>
				{props.children}
			</div>
		</div>
	)
}