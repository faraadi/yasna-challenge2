import React from 'react';
import styles from './auth.module.css';

export default function Auth() {
	return "auth";
}


const clientID = 'dda2d26d9e5f4eb08e7f2e8b12083acb';
const responseType = 'token';
const redirectUri = 'http:%2F%2Flocalhost:3000';
const href = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=user-read-private%20user-read-email`;