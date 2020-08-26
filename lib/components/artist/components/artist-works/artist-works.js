import React, { useState } from 'react';
import { Row, Col } from 'lib/components/common';
import { ArtistAlbum } from 'lib/components/artist/components';
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
							? props.albums.map(album => <ArtistAlbum key={album.id} thumb={album.images[0].url} name={album.name} />)
							: activeTab === 2
								? props.singles.map(album => <ArtistAlbum key={album.id} thumb={album.images[0].url} name={album.name} />)
								: props.playlists.map(album => <ArtistAlbum key={album.id} thumb={album.images[0].url} name={album.name} />)
					}
				</Row>
			</Col>
		</Row>
	);
}

