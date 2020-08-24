
export default {
	setToken(token) {
		sessionStorage.setItem("token", token);
	},
	getToken() {
		return sessionStorage.getItem("token")
	},
	revokeToken() {
		sessionStorage.removeItem("token");
	}
}

/*

*/