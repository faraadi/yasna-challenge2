import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const staticRowClass = "row";
const gutterPrefix = "gutter-";
const justifyPrefix = "justify-";
const alignPrefix = "align-";

/**
 * augments {Component<Props, State>}
 */

export default function Row(props) {
	const { align, justify, gutter } = props;
	const classes = classnames(staticRowClass, props.className, {
		[gutterPrefix + gutter]: !!gutter,
		[justifyPrefix + justify]: !!justify,
		[alignPrefix + align]: !!align,
	});
	return (
		<div className={classes} children={props.children} />
	)
}

Row.propTypes = {
	align: PropTypes.string,
	justify: PropTypes.string,
	gutter: PropTypes.string,
	className: PropTypes.string
}