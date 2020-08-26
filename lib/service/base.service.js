/*
	base service handle multiple task from creating a request, to resolving and handling variuos middleware and response validation.
	it has support for url and query parameters. for this app, i only wrote get method. ideally it has three other method for performing requests(post, put and delete).

	this service is not used directly by components and pages. instead each page/component has its own service that uses baseService to initiate requests.
	only `dispatch` method used by other services. other method and props will used inside class itself
*/


export default class BaseService {
	constructor(callbacks, baseUrl) {
		this.authCallback = callbacks.authCallback;
		this.tokenCallback = callbacks.tokenCallback;
		this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL;
	}

	dispatch(request) {
		if (!request.requestModel) throw new Error("BaseService: RequestModel is not defined");
		const model = {
			url: this.generateUrlPath(request.requestModel, request.params, request.query),
			options: request.options,
			headers: this.generateHeaders(request.requestModel),
			responseType: request.requestModel.responseType
		};

		switch (request.requestModel.method.toLowerCase()) {
			default:
			case "get": {
				return this.get(model);
			}
			// other methods...
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

	//resolve fetch request and process parsing and reading data, step by step.
	async resolve(url, options, params) {
		let data = null;
		try {
			const resolved = await this.parseHandler(await fetch(url, options));
			if (resolved) data = this.dataHandler(resolved);
		}
		catch (err) {
			this.errorHandler(err, params.requestId);
		};
		return this.responseHandler(data);
	}

	async parseHandler(res) {
		return res.ok
			? { ok: true, body: await res.json() }
			: { ok: false, body: await res.json() }
	}

	// reading data and checks for any error status, for now only 401.
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
			if (status === 401) {
				return {
					authPassed: false,
					body: null
				}
			}
			return {
				authPassed: true,
				body: null
			}
		}
	}
	// recursion section. wether return data (if authentication was successful) or call authentication callback (if failure)
	responseHandler(data) {
		if (data.authPassed) {
			return data.body;
		}
		else {
			//sign out...
			this.authCallback && this.authCallback();
		}
	}

	errorHandler(err) {
		console.log(err);
		return null;
	}

	/* utility section */
	generateUrlPath(requestModel, params, queryModel) {
		let path = this.baseUrl + requestModel.path;
		if (params) {
			path += this.createUrlParams(params);
		}
		if (queryModel) {
			path += this.generateQuery(queryModel);
		}
		return path;
	}

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
		headers['Authorization'] = 'Bearer ' + this.tokenCallback();
		return headers;
	}

	generateQuery(queryModel) {
		if (queryModel) {
			let query = "?";
			const keys = Object.keys(queryModel);
			keys.forEach((key, index) => {
				query += `${key}=${queryModel[key]}`;
				if (index < keys.length - 1) query += "&";
			});
			return query;
		}
	}
}