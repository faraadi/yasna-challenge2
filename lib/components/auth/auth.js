import React from 'react';
import Head from 'next/head';
import { Row, Col, Button } from 'lib/components/common';
import { SpotifyIcon, LockOpenIcon, DevicesIcons } from 'lib/icons';
import styles from './auth.module.css';

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID;
const responseType = 'token';
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL;
const scope = ['user-read-private', 'user-read-email', 'playlist-read-private'];
const href = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope.join("%20")}`;

export default function Auth() {
	return (
		<>
			<Head>
				<title>Authorize | Yasna Challenge</title>
			</Head>
			<main className={styles.container}>
				<Col xs={11} md={8} lg={6}>
					<Row justify='center'>
						<Row justify='center' align='center' className={styles.iconsContainer}>
							<DevicesIcons className={styles.deviceIcon} />
							<hr className={styles.glowingLine} />
							<LockOpenIcon className={styles.lockIcon} />
							<hr className={styles.glowingLine} />
							<SpotifyIcon className={styles.spotifyIcon} />
						</Row>
						<p className={styles.title}>in order to use this app, you need to login with your spotify account and give access.</p>
						<Row>
							<Row justify='center'>
								<a href={href}>
									<Button fill className={styles.authBtn}>Authorize with Spotify</Button>
								</a>
							</Row>
							<Row justify='center'>
								<a href='https://www.spotify.com/account/apps' className={styles.removeLink} target='_blank' rel='noreferrer noopener'>
									You can remove this access anytime <u>here</u>
								</a>
							</Row>
						</Row>
					</Row>
				</Col>
			</main>
			<footer className={styles.footer}>
				<p className={styles.footerCaption}>
					Not sure about Authorizing?<br />
					We don't share or use your personal info in any way.<br />
					This app is licensed under <a className={styles.footerLink}>MIT</a> also. so you can read our <a className={styles.footerLink}>Source Code</a> as well.
				</p>
			</footer>
			<style jsx global>
				{`
					html, body, #__next {
						height: 100%
					}
				`}
			</style>
		</>
	);
}