/*
 this module is a simple mechanism for storing auth tokens temporary.
 although it lacks some core features, like validation and subscribe/obervation, but gets the job done.
 i personally prefer to not use any browser storage, like localStorage to store tokens :)
*/

export default class TokenStorage {
	set token(value) {
		this._t = value;
	}
	get token() {
		return this._t;
	}
	revoke() {
		this._t = null;
	}
}