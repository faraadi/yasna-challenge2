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