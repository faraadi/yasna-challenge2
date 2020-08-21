import React from 'react';
import classnames from 'classnames';
import styles from './button.module.css';

export default function Button(props) {
	const classes = classnames(
		styles.btn,
		{
			[styles.btnOutline]: props.outline,
			[styles.btnFill]: props.fill
		},
		props.className
	);

	return (
		<button
			className={classes}
			onClick={props.onClick}
			id={props.id}
			children={props.children}
		/>
	)
}