import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './icon-button.module.css';

export default function IconButton(props) {

	const classes = classnames(styles.iconBtn, props.className);
	return (
		<button
			title={props.title}
			className={classes}
			onClick={props.onClick}
			id={props.id}
			children={props.children}
		/>
	);
}

IconButton.propsTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func
}