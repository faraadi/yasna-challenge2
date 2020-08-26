import React from 'react';
import { Row, Col } from 'lib/components/common';
import { ExternalLinkIcon } from 'lib/icons';
import styles from './artist-album.module.css';

export default function ArtistAlbum(props) {
	return (
		<Col xs={12} sm={6} md={4} lg={3} className={styles.album}>
			<img
				className={styles.albumThumb}
				src={props.thumb}
				alt={props.name + " cover"}
				title={props.name}
				draggable={false}
			/>
			<Row className={styles.albumInfo} justify='center' align='center'>
				<ExternalLinkIcon className={styles.albumLinkIcon} />
				<p className={styles.albumName}>
					{props.name}
					<br />
					<span className={styles.albumYear}>2015</span>
				</p>
			</Row>
		</Col>
	)
}