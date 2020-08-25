import React from 'react';
import Wrapper from './wrapper/wrapper';
import styles from './layout.module.css';

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<div className={styles.backdrop} />
			<Wrapper>
				{props.children}
			</Wrapper>
		</div>
	)
}