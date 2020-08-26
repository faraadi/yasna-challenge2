/*
	this function will retrieve hash and queries returned by Spotify.
	essentialy, it looks for three parameters: access_token (required), expires_in and token_type .
*/

export default function decodeHash(hash) {
	if (hash.length) {
		const queries = new URLSearchParams(hash);
		// if query incudes error parameter, user should sign in again.
		const hasError = queries.get("error");
		if (hasError) {
			return { error: true }
		}
		else {
			const result = {
				expires_in: queries.get('expires_in'),
				token_type: queries.get('token_type'),
				access_token: hash.split("&")[0].split('=')[1]
			}
			return result;
		}
	}
	else {
		return { access_token: null }
	}
}