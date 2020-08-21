import React from 'react';
import classnames from 'classnames';

const staticColClass = "col";
const xsPrefix = "xs-";
const smPrefix = "sm-";
const mdPrefix = "md-";
const lgPrefix = "lg-";
const xlPrefix = "xl-";

export default function Col(props) {
	const { xs, sm, md, lg, xl } = props;
	const classes = classnames(staticColClass, props.className, {
		[xsPrefix + xs]: !!xs,
		[smPrefix + sm]: !!sm,
		[mdPrefix + md]: !!md,
		[lgPrefix + lg]: !!lg,
		[xlPrefix + xl]: !!xl
	});
	return (
		<div className={classes} children={props.children} />
	);
}