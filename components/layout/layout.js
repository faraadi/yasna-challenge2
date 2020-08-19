import React from 'react';
import Navbar from './navbar/navbar';
import styles from './layout.module.css';
import Wrapper from './wrapper/wrapper';

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<Wrapper>
				<Navbar />
				{props.children}
			</Wrapper>
		</div>
	)
}