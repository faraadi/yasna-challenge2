import React, { useState } from 'react';
import { Row, Col } from 'lib/components/common';
import { ArtistAlbum } from 'lib/components/artist/components';
import styles from './artist-works.module.css';

const Tabs = [
	{
		title: 'Albums',
		id: 'albums'
	},
	{
		title: 'Singles/EPs',
		id: 'singles/eps'
	},
	{
		title: 'Playlists',
		id: 'playlists'
	}
];

const renderAlbum = album => (
	<ArtistAlbum
		key={album.id}
		thumb={album.images[0].url}
		name={album.name}
		href={album.external_urls.spotify}
	/>
);

export default function ArtistWork(props) {
	const [activeTab, setActiveTab] = useState(Tabs[0].id);

	const onTabClick = e => {
		e.preventDefault();
		const { id } = e.target;
		setActiveTab(id);
	}


	const renderTabContent = () => {
		switch (activeTab) {
			default:
			case 'albums': {
				return props.albums.map(renderAlbum);
			}
			case 'singles/eps': {
				return props.singles.map(renderAlbum);
			}
			case 'playlists': {
				return props.playlists.map(renderAlbum);
			}
		}
	}

	return (
		<Row className={styles.container}>
			<Col className={styles.tabsContainer}>
				<ul className={styles.tabs}>
					{
						Tabs.map(tab => (
							<li className={styles.tab} key={tab.id}>
								<button
									id={tab.id}
									className={tab.id === activeTab ? styles.tabBtnActive : styles.tabBtn}
									onClick={onTabClick}
									children={tab.title}
								/>
							</li>
						))
					}
				</ul>
			</Col>
			<Col xs={12} md='auto' className={styles.albumsConainer}>
				<Row>
					{renderTabContent()}
				</Row>
			</Col>
		</Row>
	);
}