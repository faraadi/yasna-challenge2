import React, { useState } from 'react';
import { Row, Col } from 'lib/components/common';
import { ExternalLinkIcon } from 'lib/icons';
import styles from './artist-works.module.css';

const Tabs = ["Top Tracks", "Albums", "Singles/EPs", "Playlists"];

export default function ArtistWork(props) {
	const [activeTab, setActiveTab] = useState(1);

	const onTabClick = e => {
		e.preventDefault();
		const { id } = e.target;
		setActiveTab(Number(id));
	}

	return (
		<Row className={styles.container}>
			<Col className={styles.tabsContainer}>
				<ul className={styles.tabs}>
					{
						Tabs.map((tab, key) => (
							<li className={styles.tab} key={key}>
								<button
									id={key}
									className={key === activeTab ? styles.tabBtnActive : styles.tabBtn}
									onClick={onTabClick}
									children={tab}
								/>
							</li>
						))
					}
				</ul>
			</Col>
			<Col xs={12} md='auto' className={styles.albumsConainer}>
				<Row>
					{
						activeTab === 1
							? props.albums.map(album => <Album key={album.id} thumb={album.images[0].url} name={album.name} />)
							: activeTab === 2
								? props.singles.map(album => <Album key={album.id} thumb={album.images[0].url} name={album.name} />)
								: props.playlists.map(album => <Album key={album.id} thumb={album.images[0].url} name={album.name} />)
					}
				</Row>
			</Col>
		</Row>
	);
}

function Album(props) {
	return (
		<Col xs={12} sm={6} md={4} lg={3} className={styles.album}>
			<img className={styles.albumThumb} src={props.thumb} alt="" draggable={false} />
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