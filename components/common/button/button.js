import React from 'react';
import styles from './button.module.css';

export default function Button(props) {
	return (
		<button
			className={props.outline ? styles.btnOutline : styles.btnFill}
			onClick={props.onClick}
			id={props.id}
			children={props.children}
		/>
	)
}