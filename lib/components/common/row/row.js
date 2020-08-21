import React from 'react';
import classnames from 'classnames';

const staticRowClass = "row";
const gutterPrefix = "gutter-";
const justifyPrefix = "justify-";
const alignPrefix = "align-";

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