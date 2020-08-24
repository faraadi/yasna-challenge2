const _baseUrl = "https://api.spotify.com/v1";

export default class BaseService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl || _baseUrl;
	}
	dispatch(params) {
		if (!params.requestModel) throw new Error("BaseService: RequestModel is not defined");
		const model = {
			url: this.generateUrlPath(params.requestModel, params.param),
			options: params.options,
			headers: this.generateHeaders(params.requestModel),
			responseType: params.responseType || params.requestModel.responseType
		};

		if (params.requestModel.payloadType === "json") model.payload = JSON.stringify(params.payload || {});
		else model.payload = params.payload;

		switch (params.requestModel.method.toLowerCase()) {
			default:
			case "get": {
				return this.get(model);
			}
			case "post": {
				return this.post(model);
			}
			case "put": {
				return this.put(model);
			}
			case "delete": {
				return this.delete(model);
			}
		};
	}
	get(model) {
		const option = {
			...model.options,
			method: "get",
			headers: model.headers,
			mode: "cors",
		};
		return this.resolve(model.url, option, model);
	}
	post() {

	}

	async resolve(url, options, params) {
		let data = null;
		try {
			const resolved = await this.parseHandler(await fetch(url, options));
			if (resolved) data = this.dataHandler(resolved);
			return this.responseHandler(data);
		}
		catch (err) {
			this.errorHandler(err, params.requestId);
		};
		return data;
	};

	async parseHandler(res) {
		return res.ok
			? { ok: true, body: await res.json() }
			: { ok: false, body: await res.json() }
	};

	dataHandler(resolved) {
		const { ok, body } = resolved;
		if (ok) {
			return {
				authPassed: true,
				body
			}
		}
		else {
			const { status, message } = resolved.body.error;
			console.log(status, message)
			return {
				authPassed: true,
				body: null
			}
		}
	};

	responseHandler(data) {
		if(data.authPassed) {
			return data.body;
		}
		else {
			//sign out...
		}
	}

	errorHandler(err) {
		console.log(err);
		return false;
	};

	generateUrlPath(requestModel, paramsData) {
		let param = this.baseUrl + requestModel.path;
		if (paramsData) {
			param += param
		}
		return param;
	};

	createUrlParams(params) {
		if (Array.isArray(params)) {
			let param = '';
			params.forEach(p => param += "/" + p);
			return param;
		}
		return "";
	}

	generateHeaders(requestModel) {
		const headers = {
			"Accept": "application/json",
		}
		if (requestModel.method === "post" || requestModel.method === "put") {
			headers["Content-Type"] = "application/json";
		}
		headers['Authorization'] = 'Bearer ' + sessionStorage.token;
		return headers;
	}
}