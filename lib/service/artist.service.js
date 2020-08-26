import BaseService from './base.service';

const artistID = process.env.NEXT_PUBLIC_ARTIST_ID;
const artistUserID = process.env.NEXT_PUBLIC_ARTIST_USER_ID;
if (!artistID) throw new Error('Unknown Artist ID');

export default {
	init(callbacks) {
		this.http = new BaseService(callbacks);
	},
	async getAllArtistData() {
		// retrieving all data at once to prevent wasted renders.
		const resModel = await Promise.all(
			[
				this.getArtistInfo(),
				this.getArtistAlbums(),
				this.getArtistPlaylists()
			]
		);

		if (resModel) {
			for (let resItem of resModel) {
				if (!resItem) return null;
			}
			return {
				info: resModel[0],
				albums: resModel[1].items.filter(item => item.album_type === "album"),
				singles: resModel[1].items.filter(item => item.album_type === "single"),
				playlists: resModel[2].items
			}
		}
	},
	getArtistInfo() {
		return this.http.dispatch({
			requestModel: API.info,
			params: API.info.params
		});
	},
	getArtistAlbums() {
		return this.http.dispatch({
			requestModel: API.albums,
			params: API.albums.params,
			query: {
				'include_groups': 'album,single',
				country: 'US'
			}
		});
	},
	getArtistPlaylists() {
		return this.http.dispatch({
			requestModel: API.playlists,
			params: API.playlists.params
		});
	}
}

// maps various api endpoint and related configs. also may has constant url parameters field for each endpoint.

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
	playlists: {
		path: "/users",
		method: "GET",
		params: [artistUserID, 'playlists']
	}
}