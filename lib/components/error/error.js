import React from 'react';
import { Row, Col } from 'lib/components/common';
import { SystemErrorIcon } from 'lib/icons';
import styles from './error.module.css';

export default function Error() {
	return (
		<main className={styles.main}>
			<Row className={styles.container} align='center' justify='center'>
				<SystemErrorIcon className={styles.errorIcon} />
				<h1 className={styles.ops}>Ops...</h1>
				<p className={styles.caption}>
					Something went wrong while trying to establish connection to Spotify API :(
				</p>
				<Col>
					<p className={styles.solutionCaption}>
						However you can try a few things:<br />
						1. Go to your account and terminate this session.&nbsp;
						<a className={styles.revokeLink} href='https://www.spotify.com/account/apps' target='_blank' rel='noreferrer noopener'>Revoke Session</a>
						<br/>
						2. Then come back and try reconnecting your account.&nbsp;
						<a className={styles.signinLink} href="/">Sign in Again</a>
					</p>
				</Col>
			</Row>
			<style jsx global>
				{`
					html,body,#__next {
						height: 100%
					}
				`}
			</style>
		</main>
	);
}