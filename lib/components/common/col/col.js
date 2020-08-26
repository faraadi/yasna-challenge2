import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * augments {Component<Props, State>}
 */

const staticColClass = "col";
const xsPrefix = "xs-";
const smPrefix = "sm-";
const mdPrefix = "md-";
const lgPrefix = "lg-";

export default function Col(props) {
	const { xs, sm, md, lg } = props;
	const classes = classnames(staticColClass, props.className, {
		[xsPrefix + xs]: !!xs,
		[smPrefix + sm]: !!sm,
		[mdPrefix + md]: !!md,
		[lgPrefix + lg]: !!lg,
	});
	return (
		<div className={classes} children={props.children} />
	);
}

Col.propsTypes = {
	xs: PropTypes.oneOf[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
	md: PropTypes.oneOf[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
	lg: PropTypes.oneOf[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
	sm: PropTypes.oneOf[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
	className: PropTypes.string
}
