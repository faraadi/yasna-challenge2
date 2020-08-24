import BaseService from './base.service';

const http = new BaseService();
const artistID = process.env.NEXT_PUBLIC_ARTIST_ID;
if (!artistID) throw new Error("Unknown Artist ID");

export default {
	async getArtistInfo() {
		return http.dispatch({
			requestModel: API.info,
			params: [artistID]
		});
	}
}

const API = {
	info: {
		path: "/artists",
		method: "GET"
	}
}