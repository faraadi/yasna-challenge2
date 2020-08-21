import React from 'react';
import classnames from 'classnames';
import styles from './icon-button.module.css';

export default function IconButton(props) {
	const classes = classnames(styles.iconBtn, props.className);
	return (
		<button
			className={classes}
			onClick={props.onClick}
			id={props.id}
			children={props.children}
		/>
	);
}