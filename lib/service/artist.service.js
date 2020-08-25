import BaseService from './base.service';

const http = new BaseService();
const artistID = process.env.NEXT_PUBLIC_ARTIST_ID;
const artistUserID = process.env.NEXT_PUBLIC_ARTIST_USER_ID;
if (!artistID) throw new Error('Unknown Artist ID');

export default {
	async getAllArtistData() {
		const resModel = await Promise.all(
			[
				this.getArtistInfo(),
				this.getArtistAlbums(),
				this.getArtistTopTracks(),
				// this.getArtistPlaylists()
			]
		);

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
			params: API.info.params
		});
	},
	getArtistAlbums() {
		return http.dispatch({
			requestModel: API.albums,
			params: API.albums.params,
			query: {
				'include_groups': 'album,single',
				country: 'US'
			}
		});
	},
	getArtistTopTracks() {
		return http.dispatch({
			requestModel: API.topTracks,
			params: API.topTracks.params,
			query: {
				country: 'US'
			}
		});
	},
	getArtistPlaylists() {
		return http.dispatch({
			requestModel: API.playlists,
			params: API.playlists.params
		});
	}
}

const API = {
	info: {
		path: '/artists',
		method: 'GET',
		params: [artistID]
	},
	albums: {
		path: '/artists',
		method: 'GET',
		params: [artistID, 'albums']
	},
	topTracks: {
		path: '/artists',
		method: 'GET',
		params: [artistID, 'top-tracks']
	},
	playlists: {
		path: "/users",
		method: "GET",
		params: [artistUserID, 'playlists']
	}
}