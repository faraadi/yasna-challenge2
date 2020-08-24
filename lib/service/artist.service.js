import BaseService from './base.service';

const http = new BaseService();

export default {
	async getArtistInfo() {
		return http.dispatch({
			requestModel: API.info
		});
	}
}

const API = {
	info: {
		path: "/artists/0e6qzpphJHtObTSwD75mi0",
		method: "GET"
	}
}