export default function decodeHash(hash) {
	if (hash.length) {
		const queries = new URLSearchParams(hash);
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