import BaseService from './base.service';

const http = new BaseService();
const artistID = process.env.NEXT_PUBLIC_ARTIST_ID;
if (!artistID) throw new Error('Unknown Artist ID');

export default {
	async getArtistData() {
		const resModel = await Promise.all([this.getArtistInfo(), this.getArtistAlbums(), this.getArtistTopTracks()]);
		if (resModel) {
			for (let resItem of resModel) {
				if (!resItem) return null;
			}
			return {
				info: resModel[0],
				albums: resModel[1].items,
				topTracks: resModel[2]
			}
		}
	},
	getArtistInfo() {
		return http.dispatch({
			requestModel: API.info,
			params: [artistID]
		});
	},
	getArtistAlbums() {
		return http.dispatch({
			requestModel: API.albums,
			params: [artistID, 'albums'],
			query: {
				'include_groups': 'album,single',
				country: 'US'
			}
		});
	},
	getArtistTopTracks() {
		return http.dispatch({
			requestModel: API.topTracks,
			params: [artistID, 'top-tracks'],
			query: {
				country: 'US'
			}
		});
	}
}

const API = {
	info: {
		path: '/artists',
		method: 'GET'
	},
	albums: {
		path: '/artists',
		method: 'GET'
	},
	topTracks: {
		path: '/artists',
		method: 'GET'
	}
}