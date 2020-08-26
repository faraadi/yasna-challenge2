import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './button.module.css';

export default function Button(props) {
	const classes = classnames(
		styles.btn,
		{
			[styles.btnOutline]: props.outline,
			[styles.btnFill]: props.fill,
			[styles.loading]: props.loading
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


Button.propsTypes = {
	btnOutline: PropTypes.bool,
	btnFill: PropTypes.bool,
	fill: PropTypes.bool,
	loading: PropTypes.bool,
	id: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string
}